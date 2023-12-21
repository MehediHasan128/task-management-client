import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCb41lDmrVOal7igXlm7QXzV6PdLWMwonw",
  authDomain: "task-management-b6442.firebaseapp.com",
  projectId: "task-management-b6442",
  storageBucket: "task-management-b6442.appspot.com",
  messagingSenderId: "1055179007522",
  appId: "1:1055179007522:web:d7f3ee3b3c0e86e8decc7b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;