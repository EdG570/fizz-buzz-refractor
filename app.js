var userNum = prompt("Please enter a number and let FizzBuzz do it's thing!");

userNum = parseInt(userNum); //Validates input as a number

userNum = +userNum;  //Converts user input from string to a number

//Checks if input is a decimal then rounds to nearest whole number

if(userNum % 1 === 0) {
  Math.round(userNum);
};


// Function checks for four conditions based on the number input
// by the user and writes the output to the document if the 
// condition is true.

function fizzBuzz(userNum) {
  for(var i = 1; i <= userNum; i++) {
    if((i % 3 === 0) && (i % 5 === 0)) {
      document.write("<p>Fizz Buzz</p>\n");
    }

    else if(i % 3 === 0) {
      document.write("<p>Fizz</p>\n");
    }

    else if(i % 5 === 0) {
      document.write("<p>Buzz</p>\n");
    }

    else {
      document.write("<p>" + i + "</p>\n");
    }
  }
}

fizzBuzz(userNum);







