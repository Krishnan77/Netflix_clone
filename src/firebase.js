import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyC_AGxl0S5_vWfO2GFuqxz7lffNrnek-Sg",
  authDomain: "netflix-clone-project-first.firebaseapp.com",
  projectId: "netflix-clone-project-first",
  storageBucket: "netflix-clone-project-first.appspot.com",
  messagingSenderId: "422992854134",
  appId: "1:422992854134:web:a9aacfb41ca03ca0223357"
};

const firebaseapp =firebase.initializeApp(firebaseConfig);
const db=firebaseapp.firestore();
const auth=firebase.auth();

export{auth};
export default db;