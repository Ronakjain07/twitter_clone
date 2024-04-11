import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// import {
//   getStorage,
//   ref as sRef,
//   uploadBytesResumable,
//   getDownloadUrl,
// } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-storage.js";
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
  localStorage.setItem("username", user.displayName);
  localStorage.setItem("profilepicture", user.photoURL);
  console.dir(user.photoURL);
  document.getElementById("userName").textContent = userName;
  document.getElementById("userProfilePicture").src = userProfilePicture;
  I;
}
// const logoutButton = document.getElementById("logoutbtn");

// logoutButton.addEventListener("click", function () {
//   console.log("clicked");
//   auth
//     .signOut()
//     .then(() => {
//       // Sign-out successful.
//       console.log("User signed out successfully");
//       // Redirect to index.html
//       window.location.replace("./index.html");
//     })
//     .catch((error) => {
//       // An error happened.
//       console.error("Error signing out:", error);
//     });
// });

//  updateUserProfile();

// let files = [];
// let reader = newFileReader();
// var namebox = document.getElementById("namebox");
// var extlab = document.getElementById("extlab");
// var myimg = document.getElementById("myimg");
// var proglab = document.getElementById("upprogress");
// var SelBtn = document.getElementById("posting");
// var UpBtn = document.getElementById("upbtn");
// var DownBtn = document.getElementById("downbtn");
// var input = document.createElement("input");
// input.type = "file";
// input.onchange = (e) => {
//   files = e.target.files;

//   var extention = getfileExt(files[0]);
//   var name = getFileName(files[0]);

//   namebox.value = name;
//   extlab.innerHTML = extention;
//   reader.readAsDataURL(files[0]);
// };

// reader.onload = function () {
//   myimg.src = reader.result;
// };

// SelBtn.onclick = function () {
//   input.click();
// };
// function GetFileExt(file) {
//   var temp = file.name.split(".");
//   var ext = temp.slice(temp.length - 1, temp.length);
//   return "." + ext[0];
// }
// function GetFileName(file) {
//   var temp = file.name.split(".");
//   var fname = temp.slice(0, -1).join(".");
//   return fname;
// }

// async function UploadProcess() {
//   var ImgToUpload = files[0];
//   var ImgName = namebox.value + extlab.innerHTML;
//   const metaData = {
//     contentType: ImgToUpload.type,
//   };
//   const storage = getStorage();
//   const stroageRef = sRef(storage, "Images/" + ImgName);
//   const UploadTask = uploadBytesResumable(stroageRef, ImgToUpload, metaData);
//   UploadTask.on(
//     "state-changed",
//     (snapshot) => {
//       var progess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     },
//     (error) => {
//       alert("error: image not uploaded!");
//     },
//     () => {
//       getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
//         console;
//       });
//     }
//   );
// }

// firebase.initializeApp(firebaseConfig);

// const fileInput = document.getElementById("fileInput");
// function handleFileUpload() {
//   const file = fileInput.files[0];
//   const storageRef = firebase.storage().ref();
//   const fileRef = storageRef.child(file.name);
//   fileRef
//     .put(file)
//     .then(() => {
//       console.log("File uploaded successfully");
//     })
//     .catch((error) => {
//       console.error("Error uploading file:", error);
//     });
// }

// var fileItem;
// var fileName;
// function getFile(e) {
//   fileItem = e.target.files[0];
//   fileName = fileItem.name;
// }
