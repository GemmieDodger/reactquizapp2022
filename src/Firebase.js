import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const settings = {
    timestampsInSnapshots: true, 
    merge: true 
};


// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDOU92qzDlfyrEINkIV0PU8tSdKpuIJrX0",
  authDomain: "fir-setupprep.firebaseapp.com",
  projectId: "fir-setupprep",
  storageBucket: "fir-setupprep.appspot.com",
  messagingSenderId: "66439768929",
  appId: "1:66439768929:web:cf3d5cd7461ea75ac0f320"
};

// Initialize Firebase
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;