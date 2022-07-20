import React from "react";
import SignOut from "../SignOut/SignOut";
import MessageForm from "./components/MessageForm/MessageForm";
import MessageList from "./components/MessageList/MessageList";

const ChatRoom = () => {
   return (
      <>
         <header className="header">
            <SignOut></SignOut>
         </header>

         <section className="chat">
            <div className="container">
               <MessageList></MessageList>
               <MessageForm></MessageForm>
            </div>
         </section>
      </>
   );
};

export default ChatRoom;
