import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyBrVTmXg3LgAvIcJXwmBMopSSfeY3qP4Vo",
//   authDomain: "twitter-clone-d1a1d.firebaseapp.com",
//   projectId: "twitter-clone-d1a1d",
//   storageBucket: "twitter-clone-d1a1d.appspot.com",
//   messagingSenderId: "718006999931",
//   appId: "1:718006999931:web:bdf1cfb4507e6a8ced3bde",
//   measurementId: "G-RCWBNFHYC2",
// };
const firebaseConfig = {
  apiKey: "AIzaSyABWSB5qXhUkvBw_Z5VpHolsbZF4FhKWYc",
  authDomain: "twitterclonee-f28d5.firebaseapp.com",
  projectId: "twitterclonee-f28d5",
  storageBucket: "twitterclonee-f28d5.appspot.com",
  messagingSenderId: "201523792320",
  appId: "1:201523792320:web:3fef464d3639e5d1dba025",
  measurementId: "G-XTWKT515GD",
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
      window.location.replace("./index1.html");
      updateUserProfile(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      // ...
    });
});
function updateUserProfile(user) {
  const userName = user.displayName;
  const userEmail = user.email;
  const userProfilePicture = user.photoURL;
  // let pfp = document.getElementById("profpicture");
  // console.log(user.photoURL);
  // pfp.style.backgroundImage = `url('${user.photoURL}')`;
  localStorage.setItem("username", user.displayName);
  localStorage.setItem("profilepicture", user.photoURL);
  console.dir(user.photoURL);

  // Update the profile section with user data
  document.getElementById("userName").textContent = userName;
  document.getElementById("userProfilePicture").src = userProfilePicture;
  I;
}
// updateUserProfile();
