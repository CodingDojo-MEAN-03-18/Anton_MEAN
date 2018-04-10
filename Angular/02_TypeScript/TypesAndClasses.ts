var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1, 2, 3, 4];
var myArr: Array<number> = [1, 2, 3, 4];

var myObj:{ [key:string] : (string | number) } = { name:'Bill'};
let anythingVariable: any = "Hey";
anythingVariable = 25; 
var arrayOne: boolean[] = [true, false, true, true]; 
var arrayTwo: any[] = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };

class MyNode{
        val:number;
        _priv:number;

    constructor(val:number){
        this.val = 0;
        this.val = val;
    }

    doSomething(){
        this._priv = 10;
    }
}


const myNodeInstance: MyNode= new MyNode(1);

console.log(myNodeInstance.val);

function myFunction():void {
    console.log("Hello World");
    return;
}

function sendingErrors():never {
	throw new Error('Error message');
}