import Character from './Character';
// import Portal from ./Character.js;
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
			this.Grid = this.parse(this.plan);

			this.character.initializeCharacter(this.ctx,this.character.GridX,this.character.GridY);

			// draw(this.Grid) {

			// }
	}

	parse(plan) {
		let grid = [];

		for(var i=0;i<plan.length;i++) {
			let array = plan[i].split(" ");
		
			grid.push(array);
			// for(var j=0;i<array.length;i++) {
			// 	if(array[j] == "itm") {
			// 		this.items.push()
			// 		array[j] = "kkk";

			// 	}
			// 	else if(array[j] == "moe") {
			// 		this.Enemies.push(new Enemy(i,j,))
			// 		array[j] = "kkk";

			// 	}
			// 	else if(array[j] == "ptW") {
			// 		this.portals.push(new Portal(i,j,1));
			// 		array[j] = "kkk";
			// 	}

			// 	else if(array[j] == "ptB") {
			// 		this.portals.push(new Portal(i,j,0));
			// 		array[j] = "kkk";
			// 	}
			// }
		}

		return grid;
	}




	play(){
		// remove god mode
		// this.universeElem.removeEventListener('click', loopCells);
		// game loop
		// console.log(this.speed);

		var self = this;

		setInterval(function() {
			self.character.draw(self.ctx);
			self.character.checkCollision(self.protals, self.enemies, self.items);
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
		console.log(this.Grid);

		for(var i=0;i<this.Grid.length;i++) {

			for(var j=0;j<this.Grid[i].length;j++) {
				let elem = this.Grid[i][j];
						console.log(elem);
				if (elem == "xxx") {
					console.log(j);
					console.log(i);
					this.ctx.fillRect((1+3*j+j)*this.DIMENSION.CELL_LENGTH,i*this.DIMENSION.CELL_HEIGHT,3*this.DIMENSION.CELL_LENGTH,this.DIMENSION.CELL_HEIGHT);
				}
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


}

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