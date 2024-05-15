// Task 1 -  Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
interface User{
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // its means it is optional

}
function isLegal(user:User){
    if(user.age>18){
        return true;
    } else{
        return false;
    }
}
const out = isLegal({
    firstName:"Shubhasheesh",
    lastName: "Kundu",
    age: 20
})
console.log(out);

// Interfaces have another special property. You can implement interfaces as a class.