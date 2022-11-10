
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
    constructor(position) {
        this.position = position;
    }
}

const player = new Sprite({x:50,y:100});
c.fillStyle = 'red';
c.fillRect(player.position.x,player.position.y,10,10);