import React from "react";
import { auth } from "../../firebaseSetup";

const SignOut = () => {
   const signOut = () => {
      auth.signOut();
   };

   return (
      auth.currentUser && (
         <button
            className="signout-button button-style btn-reset"
            onClick={signOut}
         >
            Sign Out
         </button>
      )
   );
};

export default SignOut;
