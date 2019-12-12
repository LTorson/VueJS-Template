import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
	apiKey: "AIzaSyDKvFmvM50YAeX2CAyuHK9PKFsV8IyOEjw",
	authDomain: "cropchien-7a33b.firebaseapp.com",
	databaseURL: "https://cropchien-7a33b.firebaseio.com",
	projectId: "cropchien-7a33b",
	storageBucket: "cropchien-7a33b.appspot.com",
	messagingSenderId: "644705111340"
}

firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default {
  db
}