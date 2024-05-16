// Example 1 - Game - Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	// do something.
    if(keyPressed == Direction.Up){
        console.log("Going to Upwards");
        
    }
}

// doSomething(Direction.Up);

// Anothe Example - By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  
let currentDirection = CardinalDirections.North;
let anotherDirection = CardinalDirections.West;
console.log(currentDirection);
console.log(anotherDirection);

// Numeric Enums - Initialized = if set the value of the first numeric enum and have it auto increment from that
enum CardinalDirections1 {
    North = 1,
    East,
    South,
    West
  }
console.log(CardinalDirections1.North);
console.log(CardinalDirections1.West);

// Numeric Enums - Fully Initialized = assign unique number values for each enum value. Then the values will not incremented automatically
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }

console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);

// String Enums - Enums can also contain strings. This is more common than numeric enums, because of their readability and intent
enum CardinalDirections2 {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };

console.log(CardinalDirections2.North);
console.log(CardinalDirections2.West);
