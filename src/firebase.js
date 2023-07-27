import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBND-xv125-ERXioePTiRiKP_FkmbsL4ns",
  authDomain: "clone-96208.firebaseapp.com",
  projectId: "clone-96208",
  storageBucket: "clone-96208.appspot.com",
  messagingSenderId: "329346216110",
  appId: "1:329346216110:web:338e1fe2475fad3368bd3f",
  measurementId: "G-8Z1K8BJ1D0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};