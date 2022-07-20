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
   const [authenticated] = useAuthState(auth);

   return (
      <div className="app">
         {authenticated ? <ChatRoom></ChatRoom> : <SignIn></SignIn>}
      </div>
   );
}

export default App;
