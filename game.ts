#! /usr/bin/env node
// SHABANG

import inquirer from "inquirer"

const randomnumber = Math.floor(Math.random() * 6 + 1);

console.log("welcome to game")

const answer = await inquirer.prompt([
 { 
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number from 1 to 6",
},
]);

if (answer.userGuessedNumber === randomnumber){console.log("Congratulations! you guessed A right number")}
else {console.log("you guessed wrong number")}







