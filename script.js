import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBrVTmXg3LgAvIcJXwmBMopSSfeY3qP4Vo",
  authDomain: "twitter-clone-d1a1d.firebaseapp.com",
  projectId: "twitter-clone-d1a1d",
  storageBucket: "twitter-clone-d1a1d.appspot.com",
  messagingSenderId: "718006999931",
  appId: "1:718006999931:web:bdf1cfb4507e6a8ced3bde",
  measurementId: "G-RCWBNFHYC2",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "./index1.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      // ...
    });
});
