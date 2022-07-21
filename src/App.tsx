import React from "react";

import "./App.css";

//firebase setup
import { auth } from "./firebaseSetup";

//hooks
import { useAuthState } from "react-firebase-hooks/auth";

//components
import ChatRoom from "./pages/ChatRoom/ChatRoom";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
   const [authenticated] = useAuthState(auth);

   return (
      <div className="app">
         {authenticated ? <ChatRoom></ChatRoom> : <LoginPage></LoginPage>}
      </div>
   );
}

export default App;
