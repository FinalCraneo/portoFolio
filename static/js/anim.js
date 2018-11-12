//set in canvas
var me = document.currentScript;
var parent = me.parentElement;

//Global Variables
let objLayer;
let player1;
let anim1;

let animation = [];
let theBundle;

let laIm;

//p5 Functions

function preload(){

	theBundle = new BundleSheets();

	theBundle.SetInitialState('Idle');

	theBundle.Add('../sprites/caballero/tile000.png', 'Idle', 0, 0, 32, 32, 13, 0.25,);
	theBundle.Add('../sprites/caballero/tile001.png', 'RunRight', 0, 0, 32, 32, 8, 0.125);
	theBundle.Add('../sprites/caballero/tile002.png', 'AttackDerecha', 0, 0, 32, 32, 8, 0.125);
}

function setup(){

	window.addEventListener('keydown', e => {
		if(e.code = 'space')
			anim1.ChangeState("AttackDerecha", false);
		
		e.preventDefault();
		console.log(event);
	});

	//frameRate(8);
	let canvas = createCanvas(720, 400);
	canvas.parent(parent.id);

	anim1 = new Animation(theBundle.bundleSheets);
	

	//layers
	objLayer = new ObjectLayer();
	//gameObjects
	player1 = new Player("nuevoPlayer", objLayer, "IdleState");
}

function draw(){
	background(0);
	//image(anim1.animationFrames[frameCount % anim1.animationFrames.length], 0, 0);
	anim1.Draw(100,10, 64, 64);

	
	//image(anim1.animationFrames[0], 0, 0);

	//StaticRender();
	//FixedUpdate();//physics
	//Update();//game logic
	//LateUpdate();//after movement
	//Render();
}


//User Functions
function FixedUpdate(){
	
}

function Update(){
	objLayer.Update();
}

function LateUpdate(){

}

function Render(){
	objLayer.Draw();	
}

function StaticRender(){
	background(50);
}