// Get a reference to the database service
import tmgPlayers from './tmgPlayers.json';

var database = firebase.database();

function writePlayersData(
  playerId,
  playerFirstName,
  playerLastName,
  playerCountry,
  playerBirthDate,
  playerAge,
  playerPosition,
  playerClubCurrent,
  playerHeightCms,
  playerWeightKg,
  playerThumbnailImgUrl,
  playerImgUrl,
  PlayerVideoUrl,
  PlayerDescription
) {
  firebase.database().ref('players/' + playerId).set({
    playerId: 001,
    playerFirstName: 'SEBASTIAN',
    playerLastName:  
    playerCountry,
    playerBirthDate,
    playerAge,
    playerPosition,
    playerClubCurrent,
    playerHeightCms,
    playerWeightKg,
    playerThumbnailImgUrl,
    playerImgUrl,
    PlayerVideoUrl,
    PlayerDescription
  });
}


<script src="https://www.gstatic.com/firebasejs/4.5.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.5.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.5.0/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.5.0/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.5.0/firebase-messaging.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAkn-IxM8CC0f7vJ1DtBverCS6cqLi_4hQ",
    authDomain: "tmgfootball-a704b.firebaseapp.com",
    databaseURL: "https://tmgfootball-a704b.firebaseio.com",
    projectId: "tmgfootball-a704b",
    storageBucket: "tmgfootball-a704b.appspot.com",
    messagingSenderId: "800565118975"
  };
  firebase.initializeApp(config);
</script>
