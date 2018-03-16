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

    
}