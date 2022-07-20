import "./Header.css";

import SignOut from "../SignOut/SignOut";

const Header = () => {
   return (
      <header className="header">
         <div className="header__inner container">
            <SignOut></SignOut>
         </div>
      </header>
   );
};

export default Header;
