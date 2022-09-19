//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAhEJCJbQLy4WGM2Dgz1YiNNBu-yE7zY4E",
    authDomain: "chat-bbb60.firebaseapp.com",
    projectId: "chat-bbb60",
    storageBucket: "chat-bbb60.appspot.com",
    messagingSenderId: "124740526766",
    appId: "1:124740526766:web:eba30a7f86ae1e0ca4433f"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}