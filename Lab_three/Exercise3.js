var EventEmitter=require("events");

//Pseuso class 
class Gym extends EventEmitter{
    constructor(){
        super();
       this.message = "Athlet is working out";
    } 
    go(value){
        this.on("athletObject",()=>console.log(this.message));
        setInterval(()=> this.emit("athletObject"),1000);      
    }
}
console.log("Start");
var newAthlet=new Gym();//instance of Gym class
newAthlet.go(1);
console.log("End");