// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAhEJCJbQLy4WGM2Dgz1YiNNBu-yE7zY4E",
    authDomain: "chat-bbb60.firebaseapp.com",
    projectId: "chat-bbb60",
    storageBucket: "chat-bbb60.appspot.com",
    messagingSenderId: "124740526766",
    appId: "1:124740526766:web:eba30a7f86ae1e0ca4433f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



