// app js
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



var config = {
  apiKey: process.env.sh,
  authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

app.post('/addUser', (req, res) => {
  firebase.database().ref('users/' + req.body.email).set(req.body);
})

app.post('/checkReceivedPayments', (req, res) => {
  //req.body.paymentTitle tells which payment to find in database and
  firebase
})
