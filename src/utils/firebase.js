import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyCImF-51XLw6bLU8vTn1gR1bu1GOhRUdUY',
	authDomain: 'movie-review-af5b1.firebaseapp.com',
	databaseURL: 'https://movie-review-af5b1.firebaseio.com',
	projectId: 'movie-review-af5b1',
	storageBucket: 'movie-review-af5b1.appspot.com',
	messagingSenderId: '995275624757'
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings);

export { firebase, firestore };
