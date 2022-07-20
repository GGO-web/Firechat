import { auth } from "../../../../../../firebaseSetup";
import { filterUnique } from "../../../../../../utils/filterUnique";
import "./ChatMembers.css";

const ChatMembers = ({
   membersImages,
}: {
   membersImages: string[] | undefined;
}) => {
   const isCurrentUser = (avatarURL: string) => {
      return auth.currentUser?.photoURL === avatarURL;
   };

   return (
      <div className="chat-members">
         {filterUnique(membersImages)?.map(
            (avatarURL: string, index: number) => {
               return (
                  <div
                     key={index}
                     className={`chat-members__item${
                        isCurrentUser(avatarURL)
                           ? " chat-members__item--active"
                           : ""
                     }`}
                  >
                     <img
                        className="chat-members__item-img"
                        src={avatarURL}
                        alt=""
                     />
                  </div>
               );
            }
         )}
      </div>
   );
};

export default ChatMembers;
