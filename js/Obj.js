class Obj{
  constructor(options,state){
    this.GridX = options.X;
    this.GridY = options.Y;
    this.state = 0;//0 is a color0, 1 is color1
  }

function update(obj){
  ctx.clearRect(obj.x, obj.y, canvas.width, canvas.height);
}
}
