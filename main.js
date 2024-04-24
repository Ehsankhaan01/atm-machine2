#! /usr/bin/env node
import inquirer from 'inquirer';
let mybalance = 10000;
let mypin = 1234;
let yourpin = await inquirer.prompt([
    {
        type: "number",
        name: "pincode",
        message: "enter your pin code",
    }
]);
if (yourpin.pincode === mypin) {
    console.log("wellcome ahsan khan");
    let operationAns = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "please select an option",
            choices: ["withdraw", "check Balance"]
        }
    ]);
    if (operationAns.operator === "withdraw") {
        let amountAns = await inquirer.prompt({
            type: "number",
            name: "amount",
            message: "enter your amount",
        });
        mybalance -= amountAns.amount;
        console.log(`your remaining balance is ${+mybalance}`);
    }
    else if (operationAns.operator === "check Balance") {
        console.log(`your balance is ${+mybalance}`);
    }
}
else
    console.log("please enter the correct code");
