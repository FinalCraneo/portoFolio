'use strict';

var firebase = require('firebase');

exports.handler = function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false; //<---Important

    var config = {
        apiKey: "AIzaSyCPsiU4bLGc1_18AVr3MNevz_OteSedi7Q",
        authDomain: "my-not-awesome-project-24bbf.firebaseapp.com",
        databaseURL: "https://my-not-awesome-project-24bbf.firebaseio.com",
        projectId: "my-not-awesome-project-24bbf",
        storageBucket: "my-not-awesome-project-24bbf.appspot.com",
        messagingSenderId: "104276198773"
    };

    if (firebase.apps.length == 0) { // <---Important!!! In lambda, it will cause double initialization.
        firebase.initializeApp(config);
    }

    let database = firebase.database();

    var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("c");
    console.log('c: ', c);

    let hello = 'Hello';

    var bodyO = {
        nombre: 'Joseph',
        edad: 25
    };

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(bodyO)
    });
}