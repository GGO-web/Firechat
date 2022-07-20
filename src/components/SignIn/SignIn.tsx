import React from "react";

import "./SignIn.css";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseSetup";

const SignIn = () => {
   const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
   };

   return (
      <section className="signin container">
         <button
            className="signin-button button-style btn-reset"
            onClick={signInWithGoogle}
         >
            Sign in with Google
         </button>

         <div className="signin__group">
            <h2 className="signin__group-title">
               Before you start, don't forget to follow these rules or you will
               be banned!
            </h2>

            <ol className="signin__rules">
               <li className="signin__rules-item">Respect other members.</li>
               <li className="signin__rules-item">
                  Prohibit inappropriate or unsafe content.
               </li>
               <li className="signin__rules-item">Avoid spam in the chat.</li>
               <li className="signin__rules-item">
                  Detect profiles or identities are forbidden.
               </li>
               <li className="signin__rules-item">
                  Protect members' confidentiality.
               </li>
               <li className="signin__rules-item">
                  Prevent any use of discriminatory language and hate speech.
               </li>
            </ol>
         </div>
      </section>
   );
};

export default SignIn;
