type Users = {
    fistName: string,
    lastName: string,
    age: number
}

// Task 1 - Let’s say you want to print the id of a user, which can be a number or a string.
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

// Task 2 - What if you want to create a type that has every property of multiple types/ interfaces
type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  console.log(teamLead);
  