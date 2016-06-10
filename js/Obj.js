class Obj{
  constructor(options){
    this.GridX = options.GridX;
    this.GridY = options.GridY;
	this.H_BLOCKS = 13;
    this.H_DIMENTION = options.H_DIMENTION;
    this.V_BLOCKS = 25;
    this.V_DIMENTION = options.V_DIMENTION;

  }

	 clear(ctx) {
		 ctx.clearRect(0, 0, this.H_DIMENTION,  this.V_DIMENTION);
  }
}

module.exports = Obj;
