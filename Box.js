class Box{

//properties: this 
//restituion means bounciness
constructor(x,y,width,height){
    var options = {
        restitution:1
      }
    this.wbox = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(myLand,this.wbox);
    
}

display(){
    
    rectMode(CENTER);
    rect(this.wbox.position.x, this.wbox.position.y, 70,70);

} 




}

