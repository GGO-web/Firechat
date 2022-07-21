import { auth } from "../../../../firebaseSetup";

import "./ChatMembers.css";

const filterUnique = (array: (string | null | undefined)[]): string[] => {
   const unique = Array.from(new Set(array));

   return unique.filter((item) => {
      return typeof item === "string" && item.length > 0;
   }) as string[];
};

const ChatMembers = ({
   membersImages,
}: {
   membersImages: (string | null | undefined)[];
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
                        alt={avatarURL}
                     />
                  </div>
               );
            }
         )}
      </div>
   );
};

export default ChatMembers;
