import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAkn-IxM8CC0f7vJ1DtBverCS6cqLi_4hQ",
    authDomain: "tmgfootball-a704b.firebaseapp.com",
    databaseURL: "https://tmgfootball-a704b.firebaseio.com",
    projectId: "tmgfootball-a704b",
    storageBucket: "tmgfootball-a704b.appspot.com",
    messagingSenderId: "800565118975"
  };
  firebase.initializeApp(config);

export default firebase;  
