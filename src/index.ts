console.log("Hello world");

// variable
let age: number = 20;
if (age < 50) {
  age += 10;
}

let sales = 123_456_78;
let course = "TypeScript";
let is_published = true;

// The any type
let level; // TypeScript consider it any
level = 1;
level = "a";

function render(dosument: any) {
  console.log(document);
}

// arrays
let number: number[] = [];
let arr: [number, string] = [1, "Sk"];
const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.


//Tuples
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];



// ENUMS
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);




//Functions - ypeScript has a specific syntax for typing function parameters and return values
function getTime(): number {
    return new Date().getTime();
  }

function printHello(): void {
    console.log('Hello!');
  }

function multiply(a: number, b: number) {
    return a * b;
  }

function add(a: number, b: number, c?: number) { // the `?` operator here marks parameter `c` as optional
    return a + b + (c || 0);
  }

function pow(value: number, exponent: number = 10) {  //Default Parameters
    return value ** exponent;
  }

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }



// Object
const cars: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

const caar = {
    type: "Toyota",
  };
caar.type = "Ford"; // no error
// caar.type = 2; // Error: Type 'number' is not assignable to type 'string'.

const carss: { type: string, mileage?: number } = { 
    type: "Toyota"
  };
carss.mileage = 2000;



// Type Aliases - It allow defining types with a custom name (an Alias).
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};


// Union Type
function kgToLbs(weight: number | string):number {
    // Narrowing
    if(typeof weight == 'number'){
        return weight * 2.2;
    }
    else{
        return parseInt(weight)*2.2;
    }

}
kgToLbs(10);
kgToLbs('10');


//InterSection type
type Draggable = {
    drag: () => void
};
type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable // intersection type
let testBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// null type
let value: string | undefined | null = null;
value = 'hello';
value = undefined;
