import React from "react";

import "./App.css";

//firebase setup
import { auth } from "./firebaseSetup";

//hooks
import { useAuthState } from "react-firebase-hooks/auth";

//components
import ChatRoom from "./components/ChatRoom/ChatRoom";
import SignIn from "./components/SignIn/SignIn";

function App() {
   const user = useAuthState(auth);

   return (
      <div className="App">
         <header className="App-header"></header>

         <section>{user ? <ChatRoom></ChatRoom> : <SignIn></SignIn>}</section>
      </div>
   );
}

export default App;
