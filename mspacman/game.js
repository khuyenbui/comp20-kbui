function init()
{
        canvas = document.getElementById('game_canvas');
        ctx = canvas.getContext('2d');
        pacmanImg = new Image();
        pacmanImg.src = 'pacman10-hp-sprite.png';
        pacmanImg.onload = function draw() {
                ctx.drawImage(pacmanImg, 320, 5, 460, 135, 0, 0, 460, 135);
                ctx.drawImage(pacmanImg, 80, 20, 20, 20, 35, 30, 20, 20);
        }
}

// lesson learned: don't declare image object as var.