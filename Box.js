class Box extends BaseClass{
  constructor(x, y, width, height) {
   super(x,y,width,height);
    
   this.image = loadImage("sprites/wood1.png");
    
    
  }
}
// we do not write a display function here as the common things require
// to display box can be can be taken from the base class which is automatically called
// when there is no display here
