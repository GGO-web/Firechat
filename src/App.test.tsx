/* eslint-disable jest/no-mocks-import */
import { render, screen } from "@testing-library/react";

import App from "./App";

// mocks
import { useAuthState } from "./__mocks__/react-firebase-hooks/auth";

let authenticated = false;

it("should render app with SignIn page if is not authenticated", () => {
   useAuthState.mockReturnValue([authenticated]);

   render(<App />);

   expect(screen.getByText(/Sign in with Google/i)).toBeInTheDocument();
});

it("should render app with ChatRoom page if is auth", () => {
   authenticated = true;
   useAuthState.mockReturnValue([authenticated]);

   render(<App />);

   expect(screen.queryByText(/Sign in with Google/i)).not.toBeInTheDocument();
});
