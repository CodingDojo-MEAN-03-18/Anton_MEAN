/*Assignment: Ninja Class II
Complete the below challenges using the Ninja Class from the previous assignment.
You may skip the functionality related to private variables.

.punch()
Add a new method to your Ninja class called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. 
Your .punch() should display a console message like the below example.

.kick()
Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has,
and like .punch() will take another Ninja instance.


Validations
Update .punch() and .kick() so that they only accept Instances of the Ninja class. 
Hint: You will need to find a way to check the constructor of an instance. 
You will often need to consult outside documentation to find solutions for particular features.
*/



function Ninja(name) {
    this.name = name;
    this.health = 100;

    const speed = 3;
    const strength = 3;

    this.sayName = function() {
        console.log("Hello my name is " + this.name);
    }

    this.showStats = function() {
        console.log("My speed is " + speed);
        console.log("My strength is " + strength);
        console.log("My health is " + this.health);
    }

    this.drinkSake = function() {
        this.health += 10;
    }

    this.punch = function(ninja) {
        if(ninja instanceof Ninja){ // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
            console.log(this.name + "was punched by "+ninja.name+" and lost 5 Health!")
            ninja.health -= 5;
        }else{
            console.log("Error! the incoming parameter instance of", typeof(ninja))
        }
    }

    this.kick = function(ninja) {
        if(ninja instanceof Ninja){
            console.log(this.name + "was kicked by "+ninja.name+" and lost 15 Health!")
            ninja.health -= 15;  
        }else{
            console.log("Error! the incoming parameter instance of", typeof(ninja))
        }
        
    }
}


const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"


redNinja.showStats();
blueNinja.showStats();


//negative testing
redNinja.punch("blueNinja");
blueNinja.kick("redNinja");
blueNinja.kick(15);

function BadNinja(name) {
    this.name = name;
}

const badninjs = new BadNinja("arg");
redNinja.punch(badninjs);