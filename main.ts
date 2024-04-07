#!usr/ bin/env node 
import inquirer from "inquirer";

let todos = ["Aqsa", "Sammad", "Ali", "Ahad"];

async function createTodo() {
    let condition = true; // Declare and initialize the condition variable
    do {
        let ans = await inquirer.prompt({
            name: "select",
            message: "Select an operation",
            type: "list",
            choices: ["delete", "add"],
        });

        if (ans.select === "delete") {
            let del = await inquirer.prompt({
                name: "todo",
                message: "Enter the item to delete",
                type: "list",
                choices: todos.map((item) => item),
            });

            // Remove the selected item from the todos list
            let newTodo = todos.filter((val) => val !== del.todo);
            todos = [...newTodo];
        } else {
            let todoQuestion = await inquirer.prompt([
                {
                    name: "firstQuestion",
                    type: "input",
                    message: "What would you like to add to your todos? ",
                },
                {
                    name: "secondQuestion",
                    type: "confirm",
                    message: "Would you like to add more to your todos?",
                    default: true,
                },
            ]);

            // Add the new item to the todos list
            todos.push(todoQuestion.firstQuestion);

            console.log("Updated todos:", todos);

            condition = todoQuestion.secondQuestion;
        }
    } while (condition);
}

createTodo();

