import { render, screen } from "@testing-library/react";
import * as firebaseHooks from "react-firebase-hooks/firestore";

import MessageList from "../MessageList";

it("should render Message List", () => {
   jest
      .spyOn(firebaseHooks, "useCollectionData")
      .mockReturnValue([
         [{ text: "test message", createdAt: new Date() }],
         true,
         undefined,
         undefined,
      ]);

   render(<MessageList></MessageList>);

   expect(screen.getByText("test message")).toBeInTheDocument();
});
