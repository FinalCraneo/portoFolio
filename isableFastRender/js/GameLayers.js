class ObjectLayer {
	constructor() {
		this.children = [];
	}

	Draw() {
		for (let child of this.children) {
			child.Draw();
		}
	}

	Update() {
		for (let child of this.children) {
			child.Update();
		}
	}
}