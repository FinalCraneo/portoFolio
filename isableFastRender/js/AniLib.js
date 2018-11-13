class Animator {
	constructor() {

	}

	static spritesFromSheet(x, y, w, h, q) {

		let divided = {};
		divided.frames = [];

		for (let i = 0; i < q; i++) {
			let newSprite = {
				name: 'sprite-' + i,
				position: {
					w: w,
					h: h,
					x: x,
					y: y
				}

			};
			divided.frames.push(newSprite);
			x += w;
		}

		return divided;
	}
}

class Animation {

	constructor(sheets) {
		this.setAnims = {};
		this.sheets = sheets;
		this.setAnims = {};
		this.persistent = true;

		for (let state in this.sheets)
			this.setAnims[state] = Animator.spritesFromSheet(sheets[state].x, sheets[state].y,
				sheets[state].w, sheets[state].h, sheets[state].numSprites);


		this.state = sheets.state;
		this.speed = this.sheets[this.state].speed;
		this.time = 0;
		this.animationFrames = [];

		this.SeparateSheet();

		this.xx;
		this.yy;
		this.ww;
		this.hh;
	}

	SeparateSheet() {

		this.animationFrames = [];

		for (let frame of this.setAnims[this.state].frames) {

			let pos = frame.position;

			let img = this.sheets[this.state].img.get(pos.x, pos.y, pos.w, pos.h);
			this.animationFrames.push(img);
		}

	}

	Draw(x, y, w, h) {

		this.xx = x;
		this.yy = y;
		this.ww = w;
		this.hh = h;

		this.CurrentState();
		this.time += this.speed;
	}

	CurrentState() {
		let aniF = this.animationFrames;
		image(aniF[floor(this.time) % aniF.length], this.xx, this.yy, this.ww, this.hh);

		if (floor(this.time) % aniF.length >= aniF.length - 1 && !this.persistent) {

			this.ChangeState('Idle');
			this.persistent = true;
		}
	}

	ChangeState(newState, persistent) {
		this.persistent = persistent;
		this.state = newState;
		this.speed = this.sheets[newState].speed;
		this.time = 0;
		this.SeparateSheet();
	}
}

class BundleSheets {
	constructor() {
		this.bundleSheets = {};
	}

	Add(address, id, x, y, w, h, numSprites, speed) {
		let cabIdle = loadImage(address);
		this.bundleSheets[id] = {
			img: cabIdle,
			x: x,
			y: y,
			w: w,
			h: h,
			numSprites: numSprites,
			speed: speed
		};
	}

	SetInitialState(state) {

		this.bundleSheets['state'] = state;
	}
}