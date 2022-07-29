import { addDoc, serverTimestamp } from "firebase/firestore";
import { ChangeEvent, FormEvent, useState } from "react";
import { auth, messageRef } from "../../firebaseSetup";
import { isValidMessage } from "../../utils/isValidMessage";

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

      if (isValidMessage(inputValue)) {
         await addDoc(messageRef, {
            text: inputValue,
            createdAt: serverTimestamp(),
            uid,
            photoURL,
         });

         setInputValue("");
      } else {
         setInputValue(inputValue.trim());
      }
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
            data-testid="message-form__button"
            className="message-form__button btn-reset"
            style={
               !isValidMessage(inputValue)
                  ? { pointerEvents: "none", opacity: "0.3" }
                  : undefined
            }
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
