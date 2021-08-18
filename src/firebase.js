import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCxrVdw56zxlvqkmEKI31lNzfK4biiYggo",
    authDomain: "whatsapp-clone-2f1df.firebaseapp.com",
    projectId: "whatsapp-clone-2f1df",
    storageBucket: "whatsapp-clone-2f1df.appspot.com",
    messagingSenderId: "1091329759879",
    appId: "1:1091329759879:web:25c407f21275eaeaabb622",
    measurementId: "G-1PBBRL76JS"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db  = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;