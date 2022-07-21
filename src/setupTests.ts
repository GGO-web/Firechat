// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { getAuth } from 'firebase/auth';

jest.mock('firebase/auth', () => ({
   ...jest.requireActual('firebase/auth'),
   getAuth: jest.fn().mockReturnValue({ currentUser: { uid: 'test uid' } }),
}));

window.HTMLElement.prototype.scrollIntoView = function () {};
