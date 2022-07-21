import { render, screen } from "@testing-library/react";

import ChatMessage from "../components/ChatMessage/ChatMessage";

it("should determine message sender depends on the user id", () => {
   render(
      <ChatMessage
         message={{
            text: "message",
            uid: "test uid",
         }}
      ></ChatMessage>
   );

   expect(screen.getByRole("listitem")).toHaveClass(
      "message-list__message--sent"
   );
});

it("should show user avatar if message getting from the receiver", () => {
   render(
      <ChatMessage
         message={{ text: "message", uid: "test", photoURL: "some photo id" }}
      ></ChatMessage>
   );

   expect(screen.getByRole("listitem")).toHaveClass(
      "message-list__message--received"
   );

   expect(screen.getByRole("img")).toHaveClass("message-list__message-avatar");
});
