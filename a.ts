// Task 1 - Write a function that greets a user given their first name. 

function greeting(firstName: String, lastName: String){
    console.log("Hello " + firstName + " "+ lastName);  
}
greeting("Shubhasheesh", "Kundu");

// Task 2 - Write a function that calculates the sum of two functions
function sum(a:number, b:number){
    return a + b;
}
const value = sum(5, 5);
console.log(value);

// Task 3 - Return true or false based on if a user is 18+
function isLegal(age:number){
    if (age > 18) {
        return true;
    } else {
        return false
    }

}
console.log(isLegal(2));

// Task 4 - Create a function that takes another function as input, and runs it after 1 second.

function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})



