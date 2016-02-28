import Character from './Character';
import Obj from './Obj';
// import Item from ./Character.js;
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
		this.portals = [];
		this.items = [];
		this.movingE = [];
		this.stillE = [];
		this.character = new Character(0,{GridX:5,GridY:24});
		this.point = 0;
		this.win = false;
		this.H_BLOCKS = 13;
		this.H_DIMENTION = 256;
		this.V_BLOCKS = 25;
		this.V_DIMENTION = 960;
		this.intervalID = 0;

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

			this.character.initializeCharacter(this.ctx,this.character.GridX,this.character.GridY);

			// draw(this.Grid) {

			// }
	}

	parse(plan) {
		// let grid = [];

		for(var i=0;i<plan.length;i++) {
			let array = plan[i].split(" ");

	
			for(var j=0;j<array.length;j++) {
				if(array[j] == "xxx") {
					this.stillE.push(new Obj({ GridX: j, GridY: i }));
					

				}
				
				else if(array[j] == "moe") {
					this.Enemies.push(new movingE({}));

				}
				else if(array[j] == "ptW") {
					this.portals.push(new Portal(1, { GrixX: j, GridY:i}));
				}

				else if(array[j] == "ptB") {
					this.portals.push(new Portal(0, { GridX: j, GridY:i}));
				}
			}
		
		}

		// return grid;
	}




	play(){
		// remove god mode
		// this.universeElem.removeEventListener('click', loopCells);
		// game loop
		// console.log(this.speed);

		var self = this;

		this.intervalID = setInterval(function() {
			self.character.draw(self.ctx);
			self.checkCollision();
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
		//draw static stuff	
		// console.log(this.Grid);

		for(var i=0;i<this.stillE.length;i++) {

			let x = this.stillE[i].GridX;
			let y = this.stillE[i].GridY;
			console.log("x of obj is" + x);
			console.log("y of obj is" + y);

			this.ctx.fillRect((1+3*x+x)*this.DIMENSION.CELL_LENGTH,y*this.DIMENSION.CELL_HEIGHT,3*this.DIMENSION.CELL_LENGTH,this.DIMENSION.CELL_HEIGHT);

			}
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
		// var collisionType;

		// //loop through every object in the map
		// for(var i = 0; i < portals.length; i++){
		//   var pixel = convertPixel(portals[i]);//in pixel
		//   if((this.currY == pixel.y) && (this.currX == pixel.x)){
		//     this.clear();
		//     collsionType = "portals";
		//     currX = portals[i+1].GridX;//in grid
		//     currY = portals[i+1].GridY;
		//     var imageObj = new Image();
		//     imageObj.onload = function() {

		//       ctx.drawImage(imageObj, x, y);

		//     };
		//     imageObj.src = "./images/Star2.png";


		//     // ctx.beginPath();
		//     // ctx.arc(currX + 9.14, currY, 17, 0, Math.PI*2, true);//portal size
		//     // ctx.fillStyle = "#0095DD";
		//     // ctx.fill();
		//     // ctx.closePath();
		//   }
		// }

		for (var i = 0; i < this.stillE.length; i++) {
			var pixel = convertPixel(this.stillE[i]);//in pixel
			// console.log(pixel.y);
			// if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
			if (this.character.currY < pixel.y) {
				// collsionType = "stillE";
				clearInterval(this.intervalID);
				this.iniSetUp();
				console.log("i am executed");
				return;
			}
		}

		for (var i = 0; i < this.movingE.length; i++) {
			var pixel = convertPixel(this.movingE[i]);//in pixel
			// if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
			if ((this.character.currY < pixel.y) && (this.currX == pixel.x)) {
				document.reload();

			}
		}


		for (var i = 0; i < this.items.length; i++) {
			var pixel = convertPixel(this.items[i]);//in pixel
			if ((this.currY < pixel.y) && (this.currX == pixel.x)) {
				this.point++;
				console.log(this.point);
			}
		}
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