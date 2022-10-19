import firebase from "firebase/app"
import { getAuth } from 'firebase/auth'
import "firebase/database"
import {initializeApp} from "firbase/app"

var firebaseConfig = {
    apiKey: "AIzaSyAZdyJhF_HATQJwHuiv9ypqyNRH4EiHgic",
    authDomain: "todo-app-4614c.firebaseapp.com",
    databaseURL: "https://todo-app-4614c-default-rtdb.firebaseio.com",
    projectId: "todo-app-4614c",
    storageBucket: "todo-app-4614c.appspot.com",
    messagingSenderId: "727832776342",
    appId: "1:727832776342:web:0b0830c2b64113a916fcb7"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default firebase