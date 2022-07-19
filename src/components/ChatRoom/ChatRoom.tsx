import React from "react";
import {
   collection,
   DocumentData,
   limit,
   orderBy,
   Query,
   query,
} from "firebase/firestore";
import { firestore } from "../../firebaseSetup";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { DataOptions } from "react-firebase-hooks/firestore/dist/firestore/types";

const ChatRoom = () => {
   const messageRef = collection(firestore, "messages");
   const q = query(messageRef, orderBy("createdAt"), limit(25));

   const [messages] = useCollectionData(
      q as Query<Query<DocumentData>>,
      { idField: "id" } as DataOptions<Query<DocumentData>>
   );
   return <div>ChatRoom</div>;
};

export default ChatRoom;
