const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

console.log("\nYou are starting a landscaping business, but all you have are your teeth.");
console.log("Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.\n");

const tools = {
    instruments:[ 
       {name: "rusty scissors", price: 5, income: 5},
       {name: "old-timey push lawnmower", price: 25, income: 50},
       {name: "fancy battery-powered lawnmower", price: 250, income: 100},
       {name: "team of starving students", price: 500, income: 250}
    ]
}

let money = 0;
const inventory = [];
let dayCount = 0; 
while (true) {
    const decision = prompt("Would you like to begin mowing the lawn with your teeth?")
    if(decision === "yes" || decision === "y"){
        money += 1
        console.log(`You have mowed the lawn with your teeth, you have made ${money} `)
        break
    } else {
        console.log("invalid prompt please enter yes or y");
    }
     
 }

