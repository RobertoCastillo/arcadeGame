// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';	
	this.x = x;
	this.y = y;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	if (this.x < 505) {
		this.x += (100 * dt);
	}
	else {this.x = -25};
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (x,y) {
	this.sprite = 'images/char-boy.png';
	this.x = x;
	this.y = y;
}

Player.prototype.update = function() {
	if(this.y < 50) {
		player.reset();
	}
}

Player.prototype.render = function() {
	ctx.drawImage (Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(direction) {
	if(direction == 'left' && this.x > 0) {
		this.x -= 100;
	}
	if(direction == 'right' && this.x < 350) {
		this.x += 100;
	}
	if(direction == 'up' && this.y > 50) {
		this.y -= 100;
	}
	if(direction == 'down' && this.y < 400) {
		this.y += 100;
	}
}

Player.prototype.reset = function() {
	this.y = 400;
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemy1 = new Enemy (-100, 75);
var enemy2 = new Enemy (-200, 225);
var enemy3 = new Enemy (-300, 150);
var enemy4 = new Enemy (-400, 200);
var allEnemies = [enemy1, enemy2, enemy3, enemy4];

var player = new Player (200, 400);

var checkCollisions = function() {
	allEnemies.forEach(function(enemy) {
	if(enemy.x < player.x + 30 && 
	   enemy.x + 60 > player.x && 
	   enemy.y < player.y + 60 && 
	   enemy.y + 40 > player.y) {
		player.reset();
	}
	});
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
