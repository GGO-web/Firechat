import { useEffect, useRef } from "react";

import {
   DocumentData,
   limitToLast,
   orderBy,
   Query,
   query,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { DataOptions } from "react-firebase-hooks/firestore/dist/firestore/types";

import { messageRef } from "../../../../firebaseSetup";

import ChatMessage from "./components/ChatMessage/ChatMessage";

const MessageList = () => {
   const dummy = useRef<HTMLSpanElement | null>(null);
   const q = query(messageRef, orderBy("createdAt"), limitToLast(25));

   const [messages] = useCollectionData(
      q as Query<Query<DocumentData>>,
      { idField: "id" } as DataOptions<Query<DocumentData>>
   );

   useEffect(() => {
      dummy.current?.scrollIntoView({ behavior: "smooth" });
   }, [messages]);

   return (
      <>
         <ul className="message-list list-reset">
            {messages?.map((msg: any) => {
               return (
                  <ChatMessage
                     key={msg.createdAt.seconds}
                     message={msg}
                  ></ChatMessage>
               );
            })}
         </ul>

         <span ref={dummy} className="visually-hidden"></span>
      </>
   );
};

export default MessageList;
