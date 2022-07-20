import "./ChatRoom.css";

import Header from "../Header/Header";
import MessageForm from "./components/MessageForm/MessageForm";
import MessageList from "./components/MessageList/MessageList";

const ChatRoom = () => {
   return (
      <>
         <Header></Header>

         <section className="chat container">
            <MessageList></MessageList>
            <MessageForm></MessageForm>
         </section>
      </>
   );
};

export default ChatRoom;
