import React from "react";
import SignOut from "../SignOut/SignOut";
import MessageForm from "./components/MessageForm/MessageForm";
import MessageList from "./components/MessageList/MessageList";

const ChatRoom = () => {
   return (
      <div className="container">
         <header className="header">
            <SignOut></SignOut>
         </header>

         <section className="chat">
            <MessageList></MessageList>
            <MessageForm></MessageForm>
         </section>
      </div>
   );
};

export default ChatRoom;
