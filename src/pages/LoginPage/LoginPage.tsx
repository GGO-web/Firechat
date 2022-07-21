import "./LoginPage.css";

import SignIn from "../../components/SignIn/SignIn";

const LoginPage = () => {
   return (
      <section className="login container">
         <SignIn></SignIn>

         <div className="login__group">
            <h2 className="login__group-title">
               Before you start, don't forget to follow these rules or you will
               be banned!
            </h2>

            <ol className="login__rules">
               <li className="login__rules-item">Respect other members.</li>
               <li className="login__rules-item">
                  Prohibit inappropriate or unsafe content.
               </li>
               <li className="login__rules-item">Avoid spam in the chat.</li>
               <li className="login__rules-item">
                  Detect profiles or identities are forbidden.
               </li>
               <li className="login__rules-item">
                  Protect members' confidentiality.
               </li>
               <li className="login__rules-item">
                  Prevent any use of discriminatory language and hate speech.
               </li>
            </ol>
         </div>
      </section>
   );
};

export default LoginPage;
