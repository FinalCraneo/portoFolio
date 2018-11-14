exports.handler = function(event, context, callback) {


    //TODO

    // var config = {
    //     apiKey: "AIzaSyCPsiU4bLGc1_18AVr3MNevz_OteSedi7Q",
    //     authDomain: "my-not-awesome-project-24bbf.firebaseapp.com",
    //     databaseURL: "https://my-not-awesome-project-24bbf.firebaseio.com",
    //     projectId: "my-not-awesome-project-24bbf",
    //     storageBucket: "my-not-awesome-project-24bbf.appspot.com",
    //     messagingSenderId: "104276198773"
    // };
    // firebase.initializeApp(config);

    // database = firebase.database();

    let hello = 'Hello';

    callback(null, hello);

    var bodyO = {
        nombre: 'Joseph',
        edad: 25
    };

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(bodyO)
    });
}