// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdN7lPj6yZtQiqLmodJmnCobL-IWmBHmU",
    authDomain: "kwitter--2-766f9.firebaseapp.com",
    projectId: "kwitter--2-766f9",
    storageBucket: "kwitter--2-766f9.appspot.com",
    messagingSenderId: "65161255061",
    appId: "1:65161255061:web:6799d307b14010e2a2639c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";

        firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
