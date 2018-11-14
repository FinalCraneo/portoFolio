let dude, dudeSheets;
let database;
let params;

function preload() {

	params = getURLParams();

    ////////////////

    //////////Database
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

    //////////////////Crea nuevo bundle para imagenes y lo llena
    dudeSheets = new BundleSheets();

    dudeSheets.SetInitialState('Idle'); //estado inicial

    dudeSheets.Add('../sprites/caballero/tile000.png', 'Idle', 0, 0, 32, 32, 13, 0.12, );
    dudeSheets.Add('../sprites/caballero/tile001.png', 'RunRight', 0, 0, 32, 32, 8, 0.125);
    dudeSheets.Add('../sprites/caballero/tile002.png', 'AttackDerecha', 0, 0, 32, 32, 8, 0.125);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    dude = new Animation(dudeSheets.bundleSheets, 0, 0);

    elementManager = new Elements();
    Elements.conectToStreamElements();
}

function draw() {
    background(102, 255, 102);

    dude.Draw(200, 200);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    console.log('pressed: ', keyCode);
    switch (keyCode) {
        case 32:
            dude.ChangeState('AttackDerecha', false);
            break;
        case 37:
            dude.Move(keyCode);
            break;
        case 13:
            database.ref('users').set({
                Joseph: {
                    username: params.name,
                    email: params.email
                }
            });
            break;
        case 107:
            database.ref('users/').set({
                Saul: {
                    username: params.name,
                    email: params.email
                }
            });
            break;
    }
}

function keyReleased() {
    console.log('released', keyCode);
}