// Basic of Generics - function
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);
console.log(output1);
console.log(output2);

// Generics with Array
function getSerchProducts<T>(products:T[]): T {
    const myIndex = 3
    return products[myIndex]
}

// Generics Arrow function
const getMoreSerchProducts = <T>(products: T[]): T =>{
    const myIndex = 4
    return products[myIndex]
}

//  Generics with Class
