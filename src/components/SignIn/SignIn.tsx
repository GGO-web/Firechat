import React from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseSetup";

const SignIn = () => {
   const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
   };

   return (
      <button
         className="signin-button button-style btn-reset"
         onClick={signInWithGoogle}
      >
         Sign in with Google
      </button>
   );
};

export default SignIn;
