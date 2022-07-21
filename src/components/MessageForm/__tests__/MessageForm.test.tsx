import { fireEvent, render, screen } from "@testing-library/react";

import MessageForm from "../MessageForm";

jest.mock("firebase/firestore", () => ({
   ...jest.requireActual("firebase/firestore"),
   addDoc: jest.fn(),
}));

it("should change input value", () => {
   render(<MessageForm></MessageForm>);

   expect(screen.getByRole("textbox")).toHaveValue("");

   fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "sample message" },
   });

   expect(screen.getByRole("textbox")).toHaveValue("sample message");
});

it("should submit form when button pressed and clear input", () => {
   render(<MessageForm></MessageForm>);

   fireEvent.click(screen.getByTestId("message-form__button"));

   expect(screen.getByRole("textbox")).toHaveValue("");
});
