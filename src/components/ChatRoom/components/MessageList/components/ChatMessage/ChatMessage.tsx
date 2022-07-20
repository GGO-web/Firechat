import React from "react";

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
         ChatMessage: {text}
      </li>
   );
};

export default ChatMessage;
