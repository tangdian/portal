class Obj{
  constructor(options,state){
    this.GridX = options.GridX;
    this.GridY = options.GridY;
    this.state = 0;//0 is a color0, 1 is color1
	this.H_BLOCKS = 14;
    this.H_DIMENTION = 256;
    this.V_BLOCKS = 25;
    this.V_DIMENTION = 960;
  }

 clear(){
	 var gridPixel = convertPixel({ GridX: this.GridX, GridY: this.GridY });
	 ctx.clearRect(gridPixel.x, gridPixel.y, 3 * (H_DIMENTION / H_BLOCKS), V_DIMENTION / V_BLOCKS);
}


  convertPixel(counter) {
	  var gridPixel = {
		  x: counter.GridX * (this.H_DIMENTION / this.H_BLOCKS),
		  y: (counter.GridY + 1) * (this.V_DIMENTION / this.V_BLOCKS)
	  }
    return gridPixel;
	}
}

module.exports = Obj;
