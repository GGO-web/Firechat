/* eslint-disable jest/no-mocks-import */
import { render, screen } from "@testing-library/react";

import App from "./App";

// mocks
import { useAuthState } from "./__mocks__/react-firebase-hooks/auth";
import { useCollectionData } from "./__mocks__/react-firebase-hooks/useCollectionData";

jest.mock("firebase/auth", () => ({
   ...jest.requireActual("firebase/auth"),
   getAuth: jest.fn().mockReturnValue([{ currentUser: {} }]),
}));

let authenticated = false;

it("should render app with SignIn page if is not authenticated", () => {
   useAuthState.mockReturnValue([authenticated]);

   render(<App />);

   expect(screen.getByText(/Sign in with Google/i)).toBeInTheDocument();
});

it("should render app with ChatRoom page if is auth", () => {
   authenticated = true;
   useAuthState.mockReturnValue([authenticated]);
   useCollectionData.mockReturnValue([
      { text: "test message", createdAt: new Date() },
   ]);

   render(<App />);

   expect(screen.queryByText(/Sign in with Google/i)).not.toBeInTheDocument();
});
