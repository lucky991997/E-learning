import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

firebase.initializeApp ({
  apiKey: "AIzaSyBh5q_MnmSsRAXchM_R07F3H36WY_y-SoI",
  authDomain: "e-learning-e29db.firebaseapp.com",
  projectId: "e-learning-e29db",
  storageBucket: "e-learning-e29db.appspot.com",
  messagingSenderId: "971282704719",
  appId: "1:971282704719:web:55feeea5a1f69971a97d3a"
});
const dbStudent = firebase.firestore().collection("students")
const dbLearning = firebase.firestore().collection("learnings")

export { dbStudent,dbLearning }
export default firebase