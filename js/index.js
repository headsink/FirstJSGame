
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.2;

class Sprite {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 50, this.height);
    }
    update() {
        this.draw();
    }
}

const player = new Sprite({
    position: {
        x: 150,
        y: 50
    },
    velocity: {
        x: 0,
        y: 0
    }
});
c.fillStyle = 'red';
c.fillRect(player.position.x,player.position.y,10,10);