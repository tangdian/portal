import Character from './Character';
import Obj from './Obj';
import Portal from './Portal';
// import Enemy from ./Character.js;


class Game {
	// set up instance variables
	constructor(options){
		this.canvas = options.canvas;
		this.ctx = options.context;
		this.DIMENSION = options.DIMENSION;
		this.universeElem = document.getElementById('universe');
		this.speed = options.speed;
		this.plan = options.plan;
		this.Grid = [];
		this.portalsB = [];
		this.portalsW = [];
		this.itrs = [];
		this.itss = [];
		this.movingE = [];
		this.stillE = [];
		this.character = new Character({state:0,GridX:5,GridY:23});
		this.point = 0;
		this.win = false;
		this.H_BLOCKS = 13;
		this.H_DIMENTION = 256;
		this.H = this.H_DIMENSION / this.H_BLOCKS;
		this.V_BLOCKS = 25;
		this.V_DIMENTION = 960;
		this.V = this.V_DIMENSION / this.V_BLOCKS;
		this.intervalID = 0;
		this.nowptB = 0;
		this.nowptW = 0;

	}

	// initial set up
	iniSetUp() {
		// // Note: using bind to pass the class' context to the callbacks
		// // not sure if this can be improved.
		// // this.universeElem.addEventListener('click', loopCells.bindthis());
		// // when user click, start the game
		var self = this;
			document.getElementById('start')
			.addEventListener('click', function() {
				self.play();
			});

			console.log(this.plan);
			this.parse(this.plan);

			this.character.initializeCharacter(this.ctx);
			self.draw();
			self.checkCollision();
			self.character.draw(self.ctx);
			this.nowptB = this.portalsB.length-1;
			this.nowptW = this.portalsW.length-1;
	}



	parse(plan) {
		// let grid = [];

		for(var i=0;i<plan.length;i++) {
			let array = plan[i].split(" ");

	
			for(var j=0;j<array.length;j++) {
				if(array[j] == "xxx") {
					this.stillE.push(new Obj({ GridX: 1+3*j+j, GridY: i }));
					

				}
				
				else if(array[j] == "moe") {
					this.Enemies.push(new movingE({}));

				}
				else if(array[j] == "ptW") {
					this.portalsW.push(new Portal(1, { GridX: 1+3*j+j, GridY:i}));
				}

				else if(array[j] == "ptB") {
					this.portalsB.push(new Portal (0, { GridX: 1+3*j+j, GridY:i}));
				}
				else if (array[j] == "itr") {
					this.itrs.push(new Obj({ GridX: 1 + 3 * j + j, GridY: i }));
				}
				else if (array[j] == "its") {
					this.itss.push(new Obj({ GridX: 1 + 3 * j + j, GridY: i }));
				}

			
			}
		
		}

	}




	play(){
		// remove god mode
		// this.universeElem.removeEventListener('click', loopCells);
		// game loop
		// console.log(this.speed);

		var self = this;

		document.addEventListener("keypress", function(e){
			  self.character.changeState(e);
		});

		clearInterval(this.intervalID);

		this.intervalID = setInterval(function() {
			self.character.move(); 
			//console.log ("fuck why");
			
		}, 20);
	
		// setInterval(this.character.checkCollision(this.portals,this.enemies,this.items), this.speed);
		// document.addEventListener("keydown", this.character.changeState)

	}

	logging() {
		console.log("logging");
	}

	// draw grid
	drawGrid() {
		this.ctx.strokeStyle = '#777';
		this.ctx.lineWidth = 1;
		// vertical lines
		for (let i = 1; i<this.DIMENSION.UNIVERSE_LENGTH; i++){
			this.ctx.beginPath();
			this.ctx.moveTo(this.DIMENSION.CELL_LENGTH*i,0);
			this.ctx.lineTo(this.DIMENSION.CELL_LENGTH*i, 
				this.DIMENSION.UNIVERSE_HEIGHT*this.DIMENSION.CELL_HEIGHT);
			this.ctx.stroke();
		}
		// horizontal lines
		for (let i = 1; i<this.DIMENSION.UNIVERSE_HEIGHT; i++){
			this.ctx.beginPath();
			this.ctx.moveTo(0,this.DIMENSION.CELL_HEIGHT*i);
			this.ctx.lineTo(this.DIMENSION.UNIVERSE_LENGTH*this.DIMENSION.CELL_LENGTH, 
				this.DIMENSION.CELL_HEIGHT*i);
			this.ctx.stroke();
		}
	}

	draw() {
		var ctx = this.ctx;
		var xshift = this.DIMENSION.CELL_LENGTH;
		var yshift = this.DIMENSION.CELL_HEIGHT;
		console.log(this.portalsB);
		console.log(this.portalsW);
		var obstacleImg = new Image();
		obstacleImg.src = "./images/Obstacle.png";
		var potBImg = new Image();
		potBImg.src = "./images/potB.png";
		var potWImg = new Image();
		potWImg.src = "./images/potW.png";
		var star2Img = new Image();
		star2Img.src = "./images/Star2.png";
		var revImg = new Image();
		revImg.src = "./images/reverse.png";
		var bChar = new Image();
	    var wChar = new Image();
	    bChar.src = "./images/Black2.png";
	    wChar.src = "./images/White2.png";
		setInterval(() => {
			ctx.clearRect(0, 0, this.H_DIMENTION,  this.V_DIMENTION);
			for (var i = 0; i < this.stillE.length; i++) {
				let x = this.stillE[i].GridX;
				let y = this.stillE[i].GridY;
				ctx.drawImage(obstacleImg, x * xshift, y * yshift);

				// this.ctx.fillRect(,,3*this.DIMENSION.CELL_LENGTH,this.DIMENSION.CELL_HEIGHT);

			}


			for (var i = 0; i < this.portalsB.length; i++) {
				let x = this.portalsB[i].GridX;
				let y = this.portalsB[i].GridY;		
				ctx.drawImage(potBImg, x * xshift, y * yshift);
			}

			for (var i = 0; i < this.portalsW.length; i++) {
				let x = this.portalsW[i].GridX;
				let y = this.portalsW[i].GridY;		
				ctx.drawImage(potWImg, x * xshift, y * yshift);
			}

			for (var i = 0; i < this.itss.length; i++) {
				let x = this.itss[i].GridX;
				let y = this.itss[i].GridY;		
				ctx.drawImage(star2Img, x * xshift, y * yshift);
			}

			for (var i = 0; i < this.itrs.length; i++) {
				let x = this.itrs[i].GridX;
				let y = this.itrs[i].GridY;		
				ctx.drawImage(revImg, x * xshift, y * yshift);
			}
			


			if (this.character.state == 0) {
				ctx.drawImage(bChar, this.character.currX, this.character.currY);
			}
			else {
				ctx.drawImage(wChar, this.character.currX, this.character.currY);
			}








		},20);
		
		// //draw static stuff	
		// for (var i = 0; i < this.stillE.length; i++) {
		// 	let x = this.stillE[i].GridX;
		// 	let y = this.stillE[i].GridY;

		// 	var imageObj = new Image();
		// 	imageObj.onload = function() {

		// 		setInterval (() => ctx.drawImage(this, x * xshift, y * yshift),20);

		// 	};
		// 	imageObj.src = "./images/Obstacle.png";

		// 	// this.ctx.fillRect(,,3*this.DIMENSION.CELL_LENGTH,this.DIMENSION.CELL_HEIGHT);

		// }


		// for (var i = 0; i < this.portalsB.length; i++) {
		// 	let x = this.portalsB[i].GridX;
		// 	let y = this.portalsB[i].GridY;
			
		// 		var imageObj = new Image();
		// 		imageObj.onload = function() {

		// 			setInterval (() => ctx.drawImage(this, x * xshift, y * yshift),20);

		// 		};
		// 		imageObj.src = "./images/potB.png";
		
		// }


		// 	for (var i = 0; i < this.portalsW.length; i++) {
		// 		let x = this.portalsW[i].GridX;
		// 		let y = this.portalsW[i].GridY;
			
		// 			var imageObj = new Image();
		// 			imageObj.onload = function() {

		// 				setInterval (() => ctx.drawImage(this, x * xshift, y * yshift),20);

		// 			};
		// 			imageObj.src = "./images/potW.png";
				


		// 	}

		// 	for (var i = 0; i < this.itss.length; i++) {
		// 		let x = this.itss[i].GridX;
		// 		let y = this.itss[i].GridY;

		// 		var imageObj = new Image();
		// 		imageObj.onload = function() {

		// 			setInterval (() => ctx.drawImage(this, x * xshift, y * yshift),20);

		// 		};
		// 		imageObj.src = "./images/Star2.png";



		// 	}

		// 	for (var i = 0; i < this.itrs.length; i++) {
		// 		let x = this.itrs[i].GridX;
		// 		let y = this.itrs[i].GridY;

		// 		var imageObj = new Image();
		// 		imageObj.onload = function() {

		// 			setInterval (() => ctx.drawImage(this, x * xshift, y * yshift),20);

		// 		};
		// 		imageObj.src = "./images/reverse.png";



		// 	}

			// for (var i = 0; i < this.items.length; i++) {
			// 	let x = this.portalsW[i].GridX;
			// 	let y = this.portalsW[i].GridY;

			// 	var imageObj = new Image();
			// 	imageObj.onload = function() {

			// 		ctx.drawImage(this, x * xshift, y * yshift);

			// 	};
			// 	imageObj.src = "./images/potW.png";



			// }

		}
	



		



		// for (var i=0;i<this.portals.length;i++) {
		// 	ctx.fillStyle="#FF0000";
		// 	this.ctx.fillRect(i*CELL_LENGTH,i*CELL_HEIGHT,3*CELL_LENGTH,CELL_HEIGHT);
		// }

		// for (var i=0;i<this.portals.length;i++) {
		// 	ctx.fillStyle="blue";
		// 	this.ctx.fillRect(i*CELL_LENGTH,i*CELL_HEIGHT,3*CELL_LENGTH,CELL_HEIGHT);
		// }

		// for (var i=0;i<this.portals.length;i++) {
		// 	ctx.fillStyle="yellow";
		// 	this.ctx.fillRect(i*CELL_LENGTH,i*CELL_HEIGHT,3*CELL_LENGTH,CELL_HEIGHT);
		// }

	checkCollision() {
		var self=this;
		var bChar = new Image();
		bChar.src = "./images/Black2.png";
		var wChar = new Image();
		wChar.src = "./images/White2.png";
		// var collisionType;

		// //loop through every object in the map
		// console.log(this.portalsB[this.nowptB])
		setInterval( () => {
		if(this.portalsB.length>0) {
			var pixel = convertPixel(this.portalsB[this.nowptB]);//in pixel
			// console.log(pixel.x);
			// console.log(this.character.currX);
			if ((Math.abs(this.character.currY - pixel.y) < 5) && (Math.abs(this.character.currX - pixel.x) < 5) && (this.character.state == 0)) {
				console.log("chuan black");
				var tempX = this.character.currX;
				var tempY = this.character.currY;
				// setTimeout(function() {
				// 	console.log(tempX);
				// 	console.log(tempY);
				// 	self.character.clear(self.ctxY);

				// 	console.log("cleared");
				// },100);
				
				// this.nowptB = (this.nowptB +this.portalsB.length- 1) % this.portalsB.length;
				this.nowptB  = this.nowptB-2;
				console.log("nowB is : " + this.nowptB);

				pixel = convertPixel(this.portalsB[this.nowptB+1]);
				this.character.currX = pixel.x;
				this.character.currY = pixel.y-11;
				console.log(pixel);
				var imageObj = new Image();
				var ctx = this.ctx;
				ctx.drawImage(bChar, self.character.currX, self.character.currY);
		}
			else if (Math.abs(this.character.currY - pixel.y) < 5) {
				console.log ("Black is minused!");
				// this.nowptB = (this.nowptB + this.portalsB.length - 1) % this.portalsB.length;
				this.nowptB = this.nowptB - 1;
				console.log('now PT B is : ' + this.nowptB);
			}


		
		  }


		if (this.portalsW.length > 0) {
			var pixel = convertPixel(this.portalsW[this.nowptW]);//in pixel
			// console.log(pixel.x);
			// console.log(this.character.currX);
			if ((Math.abs(this.character.currY - pixel.y) < 5) && (Math.abs(this.character.currX - pixel.x) < 5) && (this.character.state == 1)) {
				console.log("chuan white");
				var tempX = this.character.currX;
				var tempY = this.character.currY;
				// setTimeout(function() {
				// 	console.log(tempX);
				// 	console.log(tempY);
				// 	self.character.clear(self.ctx, tempX, tempY);

				// 	console.log("cleared");
				// }, 100);

				//this.nowptW = (this.nowptW + this.portalsW.length - 1) % this.portalsW.length;
				this.nowptW  = this.nowptW-2;
				console.log("nowW is : " + this.nowptW+1);

				pixel = convertPixel(this.portalsW[this.nowptW+1]);
				this.character.currX = pixel.x;
				this.character.currY = pixel.y - 11;
				console.log(pixel);
				var imageObj = new Image();
				var ctx = this.ctx;
				ctx.drawImage(wChar, self.character.currX, self.character.currY);
			}
			else if (Math.abs(this.character.currY - pixel.y) < 5) {
				console.log ("White is minused!");
				// this.nowptW = (this.nowptW + this.portalsW.length - 1) % this.portalsW.length;
				this.nowptW = this.nowptW - 1;
				console.log('now PT w is : ' + this.nowptW);
			}



		}
		 

		// for (var i = 0; i < this.portalsW.length; i++) {
		// 	var pixel = convertPixel(this.portalsW[i]);//in pixel
		// 	if ((this.character.currY == pixel.y) && (this.character.currX == pixel.x) && (this.portalsW[i].state == this.character.state)) {
		// 		this.character.clear(this.ctx, pixel.x, pixel.y);
		// 		collsionType = "portals";
		// 		pixel = convertPixel(this.protalsW[i - 1]);
		// 		this.character.currX = pixel.x//in grid
		// 		this.character.currY = pixel.y;
		// 		var imageObj = new Image();
		// 		imageObj.onload = function() {

		// 			ctx.drawImage(this, pixel.x, pixel.y);

		// 		};
		// 		imageObj.src = "./images/Black2.png";


		// 		// ctx.beginPath();
		// 		// ctx.arc(currX + 9.14, currY, 17, 0, Math.PI*2, true);//portal size
		// 		// ctx.fillStyle = "#0095DD";
		// 		// ctx.fill();
		// 		// ctx.closePath();
		// 	}
		// }

		for (var i = 0; i < this.stillE.length; i++) {
			var pixel = convertPixel(this.stillE[i]);//in pixel
			// console.log(pixel.y);
			// if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
			if (Math.abs(this.character.currY - (pixel.y-30.4))<5) {
				// collsionType = "stillE";
				clearInterval(this.intervalID);
				this.character.rebornCharacter(this.ctx);
				console.log("i am executed");
				this.nowptB = this.portalsB.length-1;
				this.nowptW = this.portalsW.length-1;
				return;
			}
		}

		// for (var i = 0; i < this.movingE.length; i++) {
		// 	var pixel = convertPixel(this.movingE[i]);//in pixel
		// 	// if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
		// 	if ((this.character.currY < pixel.y) && (this.currX == pixel.x)) {
		// 		document.reload();

		// 	}
		// }


		// for (var i = 0; i < this.items.length; i++) {
		// 	var pixel = convertPixel(this.items[i]);//in pixel
		// 	if ((this.currY < pixel.y) && (this.currX == pixel.x)) {
		// 		this.point++;
		// 		console.log(this.point);
		// 	}
		// }
},20);

}
}


function convertPixel(counter){
    var H_BLOCKS = 13;
    var H_DIMENTION = 256;
    var V_BLOCKS = 25;
    var V_DIMENTION = 960;
    var gridPixel = {
		x: counter.GridX * (H_DIMENTION / H_BLOCKS),
		y: (counter.GridY) * (V_DIMENTION / V_BLOCKS)
    }
    return gridPixel;
}


// Private methods
// --------------------

// Loop over the cells
function loopCells(e) {
	var universeElem = document.getElementById('universe');
	var pageX = e.pageX - universeElem.offsetLeft;
	var pageY = e.pageY - universeElem.offsetTop;

	for (let i = 0; i<this.universe.height; i++){
		for (let j=0; j<this.universe.length; j++){
			let cell = this.universe.cells[i][j];
			handleClick(this, cell, pageX, pageY);
		}
	}
}

// give life or death to the cell clicked.
// Note: because loopCells is a callback which has the class context
// bound to it, this function which is called in the callback doesn't get the
// context implicitly, so I must pass it. Doesn't feel clean...
// function handleClick(self, cell, pageX, pageY){
// 	if (pageX > cell.x && pageX < cell.x+self.universe.cellLength &&
// 				pageY > cell.y && pageY < cell.y+self.universe.cellHeight ) {
// 		changeCells(self, cell);
// 	}
// }

// 1 step = 1 generation
function step(){

	
}

/*
*	pass the cell through the 4 rules. 
	Note: cells should not update here, since altering 1 before you can
	analyze the others will cause erroneous outcomes.
*/
function transitions(self, cell, cellsToChange) {
	var uniLength = self.universe.length;
	var uniHeight = self.universe.height;
	var neighboursAlive = 0;
	// Go through the neighbours of each cell.
	for (let i=0; i<8; i++){
		let neighbourID = cell.neighbours[i];
		if (neighbourID >= uniLength*uniHeight || neighbourID <0) continue;
		let neighbour = getCellById(self, neighbourID);
		if (neighbour.state === 1) neighboursAlive++;
	}
	if (cell.state === 1){
		// ze life rules
		// -------------------
		// 1) Any live cell with fewer than two live neighbours dies, as 
		// if caused by under-population.
		// 2) Any live cell with two or three live neighbours lives on to 
		// the next generation.
		if (neighboursAlive < 2) cellsToChange.push(cell.id);
		// 3) Any live cell with more than three live neighbours dies, as if 
		// by overcrowding.
		else if (neighboursAlive > 3) cellsToChange.push(cell.id);
	}
	else {
		// 4) Any dead cell with exactly three live neighbours becomes a 
		// live cell, as if by reproduction.
		if (neighboursAlive === 3) cellsToChange.push(cell.id);
	}
} 

function changeCells(self, cell) {
	self.ctx.fillStyle = (cell.state) ? 'white' : '#333';
	self.ctx.fillRect(cell.x+1, cell.y+1, 
			self.universe.cellLength-2, self.universe.cellHeight-2);
	cell.state = (cell.state) ? 0 : 1;
}

function getCellById(self, id) {
	let row = Math.floor(id/self.universe.length);
	let column = id % self.universe.length;
	return self.universe.cells[row][column];
} 


module.exports = Game;