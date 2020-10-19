import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAWk9plVi2qffeUlMTA9bTaoA1vFH12ToU",
  authDomain: "messenger-app-redux.firebaseapp.com",
  databaseURL: "https://messenger-app-redux.firebaseio.com",
  projectId: "messenger-app-redux",
  storageBucket: "messenger-app-redux.appspot.com",
  messagingSenderId: "577364625757",
  appId: "1:577364625757:web:a08da3ecf47357563b00b4",
  measurementId: "G-799GWGCYLQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;