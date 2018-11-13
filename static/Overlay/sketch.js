let dude, dudeSheets;
let database;

function preload() {

    //////////Database

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCPsiU4bLGc1_18AVr3MNevz_OteSedi7Q",
        authDomain: "my-not-awesome-project-24bbf.firebaseapp.com",
        databaseURL: "https://my-not-awesome-project-24bbf.firebaseio.com",
        projectId: "my-not-awesome-project-24bbf",
        storageBucket: "my-not-awesome-project-24bbf.appspot.com",
        messagingSenderId: "104276198773"
    };
    firebase.initializeApp(config);

    database = firebase.database();

    //////////////////
    dudeSheets = new BundleSheets();

    dudeSheets.SetInitialState('Idle');

    dudeSheets.Add('../sprites/caballero/tile000.png', 'Idle', 0, 0, 32, 32, 13, 0.125, );
    dudeSheets.Add('../sprites/caballero/tile001.png', 'RunRight', 0, 0, 32, 32, 8, 0.125);
    dudeSheets.Add('../sprites/caballero/tile002.png', 'AttackDerecha', 0, 0, 32, 32, 8, 0.125);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    dude = new Animation(dudeSheets.bundleSheets);
}

function draw() {
    background(0);

    dude.Draw(100,100,200,200);
    //tangulo.draw(100,100,100,100);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}