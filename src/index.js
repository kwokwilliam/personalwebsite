import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap.css';
import firebase from 'firebase/app';
import 'firebase/database';
import crypto from 'crypto';
import cookies from 'browser-cookies';

console.log("v1.0.1");

var config = {
    apiKey: "AIzaSyBJCJ5AivGAldYdv9IYyhGeOEWskuaBE8k",
    authDomain: "personalsite-visitcounter.firebaseapp.com",
    databaseURL: "https://personalsite-visitcounter.firebaseio.com",
    projectId: "personalsite-visitcounter",
    storageBucket: "personalsite-visitcounter.appspot.com",
    messagingSenderId: "300262936321"
};
firebase.initializeApp(config);

let dataHelper = window.location.href.split("?q=");

// Firebase is just used to log how many visits each page of my site has gotten
// No other data is stored. 

let id = cookies.get('id');
if (!id) {
    id = crypto.randomBytes(20).toString('hex');
    cookies.set('id', id);
    firebase.database().ref('/uniqueVisitors').push({
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        id
    });
} else {
    if (!sessionStorage.getItem("visited")) {
        sessionStorage.setItem("visited", true);
        firebase.database().ref('/repeatVisitors').push({
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            id
        });
    }
}

if (dataHelper.length > 1) {
    let comeFrom = dataHelper[1];
    // let listOfComeFrom = [
    //     "jdb", "med", "lin", "inst", "fb", 'icareer', 'tw', 'iuga', 'reddit', 'cc'
    // ];
    // if (listOfComeFrom.indexOf(comeFrom) !== -1) {
    firebase.database().ref('/cameFrom').push({
        comeFrom,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        id
    })
    // }

    if (document.referrer && document.referrer !== "") {
        firebase.database().ref('/cameFromReferrer').push({
            comeFrom: document.referrer,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            id
        })
    }

}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
