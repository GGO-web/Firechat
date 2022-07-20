import "./ChatMessage.css";

import { auth } from "../../../../../../firebaseSetup";

const ChatMessage = (props: any) => {
   const {
      text,
      uid,
      photoURL,
   }: { text: string; uid: string; photoURL: string } = props.message;

   const messageClass = uid === auth?.currentUser?.uid ? "sent" : "received";

   return (
      <li
         className={`message-list__message message-list__message--${messageClass}`}
      >
         {text}
         {messageClass === "received" && photoURL ? (
            <img
               className="message-list__message-avatar"
               src={photoURL}
               alt=""
            />
         ) : (
            ""
         )}
      </li>
   );
};

export default ChatMessage;
