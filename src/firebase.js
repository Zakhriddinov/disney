import firebase from "firebase";
const firebaseConfig = {
   apiKey: "AIzaSyB4paAU1yS8HV3T5hqqIDrAEfLKP6NITZY",
   authDomain: "disney-clone-74471.firebaseapp.com",
   projectId: "disney-clone-74471",
   storageBucket: "disney-clone-74471.appspot.com",
   messagingSenderId: "286833307341",
   appId: "1:286833307341:web:f5cdd9c3de15dcb8b84384",
   measurementId: "G-6EY44Y2HS1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
