import { addDoc, serverTimestamp } from "firebase/firestore";
import { ChangeEvent, FormEvent, useState } from "react";
import { auth, messageRef } from "../../firebaseSetup";

import "./MessageForm.css";

const MessageForm = () => {
   const [inputValue, setInputValue] = useState("");

   const messageInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setInputValue(value);
   };

   const messageSubmitHandler = async (e: FormEvent) => {
      e.preventDefault();

      const { uid, photoURL }: any = auth.currentUser;

      await addDoc(messageRef, {
         text: inputValue,
         createdAt: serverTimestamp(),
         uid,
         photoURL,
      });

      setInputValue("");
   };

   return (
      <form className="message-form" action="#">
         <div className="message-form__group">
            <label
               className={`message-form__label ${
                  inputValue.length ? "message-form__label--hidden" : ""
               }`}
               htmlFor="message"
            >
               Write message
            </label>

            <input
               id="message"
               name="message"
               className="message-form__input input input-reset"
               value={inputValue}
               onChange={messageInputHandler}
            />
         </div>

         <button
            type="submit"
            onClick={messageSubmitHandler}
            className="message-form__button btn-reset"
         >
            <img
               className="message-form__icon"
               aria-hidden="true"
               src="/message.svg"
               alt="Send"
            />
         </button>
      </form>
   );
};

export default MessageForm;
