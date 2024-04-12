#! /usr/bin/env node


import inquirer from "inquirer";
console.log("\n\tHello there! Welcome to my project\t\n");
let toDo = [];

let condition = true;
while (condition) {

let toDo_Questions = await inquirer.prompt(
[
    {
        name : "askFirst",
        type : "input",
        message : "What do you want to add in your todo list?"
    },

    {
        name : "askNext",
        type : "confirm",
        message : "Would you like to add something new in your todo list?",
        default : "true"
    }
]);
toDo.push(toDo_Questions.askFirst);
condition = toDo_Questions.askNext
console.log(toDo)
};
