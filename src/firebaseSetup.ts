import * as firebase from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: 'firechat-57207.firebaseapp.com',
   projectId: 'firechat-57207',
   storageBucket: 'firechat-57207.appspot.com',
   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_FIREBASE_APP_ID,
   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export const messageRef = collection(firestore, 'messages');
