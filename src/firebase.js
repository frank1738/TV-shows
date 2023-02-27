import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBSkE7ML9WIzlrQq65JvSyI96qdfjs_i8g',
  authDomain: 'tv-shows-774a2.firebaseapp.com',
  projectId: 'tv-shows-774a2',
  storageBucket: 'tv-shows-774a2.appspot.com',
  messagingSenderId: '820540936912',
  appId: '1:820540936912:web:cd62c3660f7d30550a04d5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
