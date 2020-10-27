// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {
  let throw1 = hand1.trim().toLowerCase();
  let throw2 = hand2.trim().toLowerCase();
  console.log(throw1 + " vs " + throw2)
  // if (throw1 === throw2) {
  //     return "It's a tie!"
  //   } else if (throw1 === "rock" && throw2 === "scissors") {
  //     return "Hand one wins!"
  //   } else if (throw1 === "rock" && throw2 === "paper") {
  //     return "Hand two wins!"
  //   } else if (throw1 === "paper" && throw2 === "rock") {
  //     return "Hand one wins!"
  //   } else if (throw1 === "paper" && throw2 === "scissors") {
  //     return "Hand two wins!"
  //   } else if (throw1 === "scissors" && throw2 === "paper") {
  //     return "Hand one wins!"
  //   } else if (throw1 === "scissors" && throw2 === "rock") {
  //     return "Hand two wins!"
  //   } else {
  //     return "Invalid option given. Have you ever played this before?"
  //   }

  if (throw1 === throw2) {
      return "It's a tie!"
    } else if (throw1 === "rock" && throw2 === "scissors" || throw1 === "paper" && throw2 === "rock" || throw1 === "scissors" && throw2 === "paper") {
      return "Hand one wins!"
    } else if (throw1 === "rock" && throw2 === "paper" || throw1 === "paper" && throw2 === "scissors" || throw1 === "scissors" && throw2 === "rock") {
      return "Hand two wins!"
    } else {
      return "Invalid option given. Have you ever played this before?"
    }

  // if (throw1 === throw2) {
  //   return "It's a tie!"
  //   } else if (throw1 === "rock") {
  //     if (throw2 === "scissors") {
  //       return "Hand one wins!"
  //     } else if (throw2 === "paper") {
  //       return "Hand two wins!"
  //     } else {
  //       return "Invalid option given by Player 2. Have you ever played this before?"
  //     }
  //   } else if (throw1 === "paper") {
  //     if (throw2 === "rock") {
  //       return "Hand one wins!"
  //     } else if (throw2 === "scissors") {
  //       return "Hand two wins!"
  //     } else {
  //       return "Invalid option given by Player 2. Have you ever played this before?"
  //     }
  //   } else if (throw1 === "scissors") {
  //     if (throw2 === "paper") {
  //       return "Hand one wins!"
  //     } else  if (throw2 === "rock") {
  //       return "Hand two wins!"
  //     } else {
  //       return "Invalid option given by Player 2. Have you ever played this before?"
  //     }
  //   } else {
  //     return "Invalid option given by Player 1. Have you ever played this before?"
  //   }

  
  // Write code here
  // Use the unit test to see what is expected

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
