
let shapeOption=document.getElementById("shapeOption")
let radius=document.getElementById("radius");
let width=document.getElementById("width");
let height=document.getElementById("height");
let allinput=document.querySelectorAll("input");
let primeter=document.getElementById("primeter");
let area=document.getElementById("area");

let h=0;
let w=0; 
let r=0;
 
class shape {
  #shapeName;
    constructor(shape) {
         this.#shapeName=shape;
          }
      getshape(){
            return this.#shapeName;
       }
      enviroment() {
      }
      area() {
    }
  }

 
class Polygon extends shape{
    #height;
    #width;
    constructor(height,width){
      super()
      this.#height=height;
      this.#width=width;
    }
    get width(){
      return this.#width;
    }
    get height(){
      return this.#height;
    }
    enviroment() {
      return 2*(this.height + this.width)
    }
    area() {
      return (this.height * this.width)
  }
  }
 
  class rectangle extends Polygon{
    constructor(){
      super()
}
  }

  class squre extends Polygon{
    constructor(){
      super()
}
  }

  class NonPolygon extends shape{
    #radius;
    constructor(circleradius){
      super()
      this.#radius=circleradius;
    }
    getradius(){
      return this.#radius;
    }
    enviroment(){
      return (2*3.14)* this.#radius;
    }
    area(){
      return (this.#radius *this.#radius *3.14)
  }
  }
 
  class circle extends NonPolygon{
    constructor(){
      super()
    }
  }

class Cylindrical extends NonPolygon{
  #height;
  constructor(length,radian){
    super();
    this.#height=length;
    this.radius=radian;
  }
  getheight(){
    return this.#height;
  }
  
  enviroment(){
      return 3.14*(this.radius)*2*(this.#height)
  }
  area(){
      return (this.radius)*3.14*(this.radius+this.#height)*2
  }
}


allinput.forEach(item =>{
  item.addEventListener("change",function(){
    w=width.value
    h=height.value
    r=radius.value
   if(shapeOption.value=="rectangle" || shapeOption.value=="squre" ){
    //  radius.disabled=true;
    let calc1=new Polygon(h,w) 
    primeter.innerHTML=calc1.enviroment()
    area.innerHTML=calc1.area()

   }else if(shapeOption.value=="circle"){
    let calc2=new NonPolygon(r);
    primeter.innerHTML=calc2.enviroment();
    area.innerHTML=calc2.area();

   }else if(shapeOption.value=="cylender"){
    let calc3= new Cylindrical(h,r)
   primeter.innerHTML=calc3.enviroment();
   area.innerHTML=calc3.area();
   }
   
})
})
