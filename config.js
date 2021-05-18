import firebase from 'firebase';

require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDiOqKKb-o-HLBg30JjAJUMsKAyNE4QOoY",
    authDomain: "story-hub-dd3b6.firebaseapp.com",
    projectId: "story-hub-dd3b6",
    storageBucket: "story-hub-dd3b6.appspot.com",
    messagingSenderId: "594931538064",
    appId: "1:594931538064:web:357e8a6dbdf092eb9a2015"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()