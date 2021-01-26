/* inheritence is used to shorten the programme(so that we do not repeat
  same lines of code in many or several files)
  inheritence has two classes 
  1) parent class = base class = has all common functions and properties
  that child can inherit.
  2) child class = derived class = hass its own special properties and
  can get common properties and functions using super
  bird is the child class of base class here (extends)

  */
class Bird extends BaseClass{
  constructor(x,y){
    // super is used to transfer all the props of parent class to the child class

    super(x,y,50,50);
    // special prop of the bird, bird.png will replace base.png in the parent class(placeholderImage)

    this.image = loadImage("sprites/bird.png");
  }
  display(){
    // special thing that the bird can do which is not mentioned
    // in the parent class and hence we write a display function here

    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    // call display fuction of the parent class to display the bird(common things)
    // function overriding = having same name function in child and the parent class
    
    super.display();
  }
}