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
                  ? { pointerEvents: "none", backgroundColor: "#373e4e" }
                  : undefined
            }
         >
            <svg
               className="message-form__icon"
               aria-hidden="true"
               width="16"
               height="18"
               viewBox="0 0 16 18"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0034 17.6572C12.225 16.7736 13.0924 14.4804 14.3132 12.9142C15.3703 11.5581 16 9.85259 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C8.18461 16 8.35904 16.0845 8.47808 16.2256C9.78951 17.78 11.9785 18.4333 14.0013 17.6982C14.0198 17.6915 14.021 17.6659 14.0034 17.6572Z"
                  fill="#fff"
               />
            </svg>
         </button>
      </form>
   );
};

export default MessageForm;
