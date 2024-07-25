
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAjBvCn2yBwJ4wd06oERJCQE_VTR1Pr14M",
    authDomain: "aseda-f210c.firebaseapp.com",
    projectId: "aseda-f210c",
    storageBucket: "aseda-f210c.appspot.com",
    messagingSenderId: "15499484216",
    appId: "1:15499484216:web:ee527ae46f1345ee229acd",
    measurementId: "G-M274332K5Y"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const submit = document.getElementById('submit');
submit.addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // alert('Login Successful!');
        window.location.href='index.html' 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
});
