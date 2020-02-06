import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDvjqXEPRKDtoTCIRoPm2IzzkrkQOL_kgE",
  authDomain: "ble-iotgateway.firebaseapp.com",
  databaseURL: "https://ble-iotgateway.firebaseio.com",
  projectId: "ble-iotgateway",
  storageBucket: "ble-iotgateway.appspot.com",
  messagingSenderId: "343790703005",
  appId: "1:343790703005:web:1e19f7490ca437d969df74",
  measurementId: "G-NJN88YZHD4"
};
// Initialize Firebase
export const init = () => firebase.initializeApp(firebaseConfig);
export const analytics = () => firebase.analytics();
// Get a reference to the database service
export const FBDatabase = () => firebase.database();
