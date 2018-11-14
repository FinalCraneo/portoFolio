class Animator {
    constructor() {

    }

    static spritesFromSheet(sheets) {

        this.sheets = sheets;

        //separa los sprites y los mete en su obj
        for (let sheet in this.sheets) {
            //si no es el estado inicial corta las sheets
            if (sheet != "state") {
                let currentSheet = [];
                let thisSheet = this.sheets[sheet];
                let xx = thisSheet.x;
                for (let i = 1; i <= thisSheet.numSprites; i++) {
                    let currentSprite = thisSheet.img.get(xx, thisSheet.y, thisSheet.w, thisSheet.h);
                    currentSheet.push(currentSprite);
                    xx += thisSheet.w;
                }
                this.sheets[sheet].Sprites = currentSheet;
            }
        }
        return this.sheets;
    }
}

class Animation {

    constructor(sheets, x, y) {

        this.sheets = Animator.spritesFromSheet(sheets);

        this.persistent = true;

        this.state = sheets.state; //estado inicial desde Sheets
        this.speed = this.sheets[this.state].speed; //Velocidad desde Sheets
        this.time = 0; //Inicia el tiempo en 0
        this.animationFrames = []; //animation Frames empieza vacio

        this.xx = x;
        this.yy = y;
        this.ww;
        this.hh;
    }
    //dibuja el estado actual
    Draw(w, h) {

        this.ww = w;
        this.hh = h;

        this.CurrentState();
        this.time += this.speed;
    }
    //toma la animacion actual
    CurrentState() {
        let aniF = this.sheets[this.state].Sprites;
        image(aniF[floor(this.time) % aniF.length], this.xx, this.yy, this.ww, this.hh);

        //si los frames se acaban y es estado no es persistente regresa a Idle
        if (floor(this.time) % aniF.length >= aniF.length - 1 && !this.persistent) {

            this.ChangeState('Idle', true);
            this.persistent = true;
        }
    }

    ChangeState(newState, persistent) {
        this.persistent = persistent;
        this.state = newState;
        this.speed = this.sheets[newState].speed;
        this.time = 0;
    }

    Move(direction) {
        switch (direction) {
            case 37:
                console.log(this.xx);
                this.xx--;
                break;
            case 38:
                break;
            case 39:
                break;
            case 40:
                break;
        }
    }
}

class BundleSheets {
    constructor() {
        this.bundleSheets = {};
    }
    //carga la imagen desde la direccion y agrega la imagen a el conjunto de Sheets
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

class Elements {
    constructor() {
    }

    static conectToStreamElements() {

    	this.animoso = animoso;

        // Your StreamElements JWT
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWE3YjBkOTQ4ZWNkZmIwMDAxYjUzNzI4IiwiY2hhbm5lbCI6IjVhN2IwZDk0OGVjZGZiMDAwMWI1MzcyOSIsInByb3ZpZGVyIjoidHdpdGNoIiwicm9sZSI6Im93bmVyIiwiYXV0aFRva2VuIjoiQzBncTNUSDRhTFRPMnhvUFN2R1pDR3NVeGJXeHk0T1ZLQkFhVV9HTVpmbGpuaHV0IiwiaWF0IjoxNTQyMDQ4NzUyLCJpc3MiOiJTdHJlYW1FbGVtZW50cyJ9.WGhcAGptLvzzG_TVLIFTv8R_6lNY7SOxUcsqMbOhRpA';

        const socket = io('https://realtime.streamelements.com', {
            transports: ['websocket']
        });

        // Socket connected
        socket.on('connect', onConnect);

        // Socket got disconnected
        socket.on('disconnect', onDisconnect);

        // Socket is authenticated
        socket.on('authenticated', onAuthenticated);

        // New event received
        socket.on('event', onEvent);
        // New event received
        socket.on('event:test', onTestEvent);

        function onConnect() {
            console.log('Successfully connected to the websocket');

            socket.emit('authenticate', {
                method: 'jwt',
                token: accessToken
            });
        }

        function onDisconnect() {
            console.log('Disconnected from websocket');
            // Reconnect
        }

        function onAuthenticated(data) {
            const {
                channelId
            } = data;

            console.log(`Successfully connected to channel ${channelId}`);
        }

        function onEvent(event) {
            // Deal with events
        }

        function onTestEvent(event) {
            console.log('evento: ', event.listener);
            if (event.listener == 'follower-latest') {
                animoso.ChangeState('AttackDerecha', false);
            }
        }
    }
}