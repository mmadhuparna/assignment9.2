//creating constructor function
function Airplane(model, seatingCapacity, maximumSpeed)
{
 this.model = model;
 this.seatingCapacity = seatingCapacity;
 this.maximumSpeed = maximumSpeed;
 this.print = function() // defining method 
 {
   return "model:" + " " + this.model+ '\n' +
   "seating capacity:" + " " +this.seatingCapacity+ '\n' +
   "maximum speed:" + " " +   this.maximumSpeed + "km/hr";
 }
}
var aero1 = new Airplane('lancair',50, 1000); //creating first object
console.log("Description of First Airplane Object"); //display output in console
console.log(aero1.print());

var aero2 = new Airplane('eclipse',200, 700); //creating second object
console.log("Description of Second Airplane Object");
console.log(aero2.print());

var aero3 = new Airplane('eecoupe',400, 800); // creating third object
console.log("Description of Third Airplane Object");
console.log(aero3.print());

aero1.seatingCapacity = aero1.seatingCapacity + 10; //increasing seating capacity by 10
delete aero1.maximumSpeed;  // deleting maximum speed property of first object
aero1.averageSpeed = 600;   //adding property 
console.log("First Airplane Update");  // display output in console
console.log(aero1.print());
console.log("average speed:" + aero1.averageSpeed +"km/hr");

//updatin second object as in first object
aero2.seatingCapacity = aero2.seatingCapacity + 10;
delete aero2.maximumSpeed;
aero2.averageSpeed = 600;
console.log("Second Airplane Update");
console.log(aero2.print());
console.log("average speed:" + aero2.averageSpeed +"km/hr");

//updating third object
aero3.seatingCapacity = aero3.seatingCapacity + 10;
delete aero3.maximumSpeed;
aero3.averageSpeed = 600;
console.log("Third Airplane Update");
console.log(aero3.print());
console.log("average speed:" + aero3.averageSpeed +"km/hr");
