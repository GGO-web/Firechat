import React from "react";
import {
   collection,
   DocumentData,
   limitToLast,
   orderBy,
   Query,
   query,
} from "firebase/firestore";
import { firestore } from "../../firebaseSetup";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { DataOptions } from "react-firebase-hooks/firestore/dist/firestore/types";

import ChatMessage from "./components/ChatMessage/ChatMessage";

const ChatRoom = () => {
   const messageRef = collection(firestore, "messages");
   const q = query(messageRef, orderBy("createdAt"), limitToLast(25));

   const [messages]: any = useCollectionData(
      q as Query<Query<DocumentData>>,
      { idField: "id" } as DataOptions<Query<DocumentData>>
   );

   return (
      <>
         {messages?.map((msg: any) => {
            console.log(messages);

            return (
               <ChatMessage
                  key={msg.createdAt.seconds}
                  message={msg}
               ></ChatMessage>
            );
         })}
      </>
   );
};

export default ChatRoom;
