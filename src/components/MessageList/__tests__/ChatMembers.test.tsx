import { render, screen } from "@testing-library/react";

import ChatMembers from "../components/ChatMembers/ChatMembers";

it("should display chat members without repeats", () => {
   render(
      <ChatMembers
         membersImages={[
            "user1",
            "user1",
            "user2",
            "user3",
            undefined,
            null,
            "",
         ]}
      ></ChatMembers>
   );

   const uniqueArr = ["user1", "user2", "user3"];

   uniqueArr.forEach((memberURL) => {
      expect(screen.getByAltText(memberURL)).toBeInTheDocument();
   });
});

it("should mark current user with different color", () => {
   const uniqueArr = ["user1", "user2", "test photoURL"];

   render(<ChatMembers membersImages={uniqueArr}></ChatMembers>);

   // eslint-disable-next-line testing-library/no-node-access
   const marked = document.querySelector(".chat-members__item--active");

   expect(marked).toBeInTheDocument();
});
