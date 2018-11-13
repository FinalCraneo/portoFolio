class Player {
	constructor(id, layer, startState) {
		this.color = color(100, 200, 54, 76);
		this.xx = 150;
		this.yy = 250;
		this.ww = 50;
		this.hh = 75;
		this.myName = id;
		this.visible = true;
		this.state = startState;

		layer.children.push(this);
	}

	Hide() {
		this.visible = false;
	}

	Show() {
		this.visible = true;
	}

	Draw() {
		if (this.visible) {
			fill(this.color)
			noStroke();
			rect(this.xx, this.yy, this.ww, this.hh);
		}
	}

	Update() {

		this[this.state]();
	}

	//State Functions

	MoveState() {
		this.xx++;
	}

	IdleState() {

	}

	ToggleMove() {
		if (this.state == "IdleState")
			this.state = "MoveState";
		else
			this.state = "IdleState";

		console.log(this.state);
	}
}