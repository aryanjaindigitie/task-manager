import firebase from 'firebase';


//Paste your firebase configuration here
var config = {
  apiKey: "AIzaSyBFtOXiKxBoJ4kBOPeLzdnAvWM31TbSAPA",
  authDomain: "digitize-52e01.firebaseapp.com",
  databaseURL: "https://digitize-52e01.firebaseio.com",
  projectId: "digitize-52e01",
  storageBucket: "digitize-52e01.appspot.com",
  messagingSenderId: "649747799992"
};


firebase.initializeApp(config);

const ref = firebase.database();

const auth = firebase.auth();
const storage = firebase.storage();

export {auth, storage, firebase};

export default ref;