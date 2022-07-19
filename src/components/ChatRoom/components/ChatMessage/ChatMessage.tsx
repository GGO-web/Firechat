import React from "react";
import { auth } from "../../../../firebaseSetup";

const ChatMessage = (props: any) => {
   const {
      text,
      uid,
      photoURL,
   }: { text: string; uid: string; photoURL: string } = props.message;

   const messageClass = uid === auth?.currentUser?.uid ? "sent" : "received";

   return (
      <div className={`message message--${messageClass}`}>
         ChatMessage: {text}
      </div>
   );
};

export default ChatMessage;
