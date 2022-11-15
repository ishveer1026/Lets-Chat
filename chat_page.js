const firebaseConfig = {
    apiKey: "AIzaSyDoUKfT2Yirgsx6pOXybGQanfw1ukX5dTc",
    authDomain: "chat-app-bb1f2.firebaseapp.com",
    databaseURL: "https://chat-app-bb1f2-default-rtdb.firebaseio.com",
    projectId: "chat-app-bb1f2",
    storageBucket: "chat-app-bb1f2.appspot.com",
    messagingSenderId: "433599892860",
    appId: "1:433599892860:web:e3a42fe5c577e14e9268f9"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("username");
room_name=localStorage.getItem("room_name")
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: username,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}