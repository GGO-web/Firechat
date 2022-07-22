import { useEffect, useRef } from "react";

import "./MessageList.css";

import {
   DocumentData,
   limitToLast,
   orderBy,
   Query,
   query,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { DataOptions } from "react-firebase-hooks/firestore/dist/firestore/types";

import { messageRef } from "../../firebaseSetup";
import { v4 as uuidv4 } from "uuid";

import ChatMessage from "./components/ChatMessage/ChatMessage";
import ChatMembers from "./components/ChatMembers/ChatMembers";

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
         <ChatMembers
            membersImages={
               messages?.map((msg: any): string => msg.photoURL) as string[]
            }
         ></ChatMembers>

         <ul className="message-list list-reset">
            {messages?.map((msg: any) => {
               return (
                  <ChatMessage
                     key={uuidv4()}
                     message={msg}
                     photoURL={msg.photoURL}
                  ></ChatMessage>
               );
            })}
         </ul>

         <span ref={dummy}></span>
      </>
   );
};

export default MessageList;
