import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyADXQ9BNQaDNvpzplTktJQUTfo9FWjfRrc",
  authDomain: "chat-api-client.firebaseapp.com",
  databaseURL: "https://chat-api-client.firebaseio.com",
  projectId: "chat-api-client",
  storageBucket: "chat-api-client.appspot.com",
  messagingSenderId: "22413929705",
  appId: "1:22413929705:web:74969c2c96c2727139d478"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
