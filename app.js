const prompt = require("prompt-sync")();
const username = prompt("What is your name? ");
console.log(`Your name is ${username}`);

console.log(
  "\nYou are starting a landscaping business, but all you have are your teeth."
);
console.log(
  "Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.\n"
);

const tools = {
  instruments: [
    { name: "rusty scissors", price: 5, income: 5 },
    { name: "old-timey push lawnmower", price: 25, income: 50 },
    { name: "fancy battery-powered lawnmower", price: 250, income: 100 },
    { name: "team of starving students", price: 500, income: 250 },
    { name: "team of starving students winner", price: 1000 },
  ],
};
let money = 0;
const inventory = [];
let dayCount = 0;
firstLoop: while (true) {
  let decision = prompt(
    "Would you like to begin mowing the lawn with your teeth?"
  );
  if (decision === "yes" || decision === "y") {
    money += 1;
    console.log(`You have mowed the lawn with your teeth, you have $${money} `);
    if (money >= 5) {
      console.log(
        "At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money."
      );
      decision = prompt("Would you like to buy the rusty scissors ? ");
      if (decision === "yes" || decision === "y") {
        inventory.push(tools.instruments[0].name);
        money -= tools.instruments[0].price;
        console.log(
          "Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want."
        );
        while (true) {
          decision = prompt(
            `Would you like to begin mowing the lawn with your ${tools.instruments[0].name} ? `
          );
          if (decision === "yes" || decision === "y") {
            money += tools.instruments[0].income;
            console.log(
              `You have mowed the lawn with ${tools.instruments[0].name}, you have $${money} `
            ); // put the property after the index to access the value in the object
            // labeling the loop allows you to exit out of the loop you have labeled with break
            if (money >= 25) {
              console.log(
                `At any point, if you are currently using your ${tools.instruments[0].name}, you can buy ${tools.instruments[1].name} for ${tools.instruments[1].price}. You can do this once, assuming you have enough money.`
              );
              decision = prompt(
                `Would you like to buy the ${tools.instruments[1].name} ? `
              );
              if (decision === "yes" || decision === "y") {
                inventory.push(tools.instruments[1].name);
                money -= tools.instruments[1].price;
                console.log(
                  `Using the ${tools.instruments[1].name}, you can spend the day cutting lawns and make ${tools.instruments[1].income}. You can do this as much as you want.`
                );
                while (true) {
                  decision = prompt(
                    `Would you like to begin mowing the lawn with your ${tools.instruments[1].name} ? `
                  );
                  if (decision === "yes" || decision === "y") {
                    money += tools.instruments[1].income;
                    console.log(
                      `You have mowed the lawn with ${tools.instruments[1].name}, you have $${money} `
                    ); // put the property after the index to access the value in the object
                    break firstLoop; // labeling the loop allows you to exit out of the loop you have labeled with break
                  }
                }
              } else {
                console.log(
                  `You can continue mowing the lawn with your ${tools.instruments[0].name}`
                );
              }
            }
            if (money >= 250) {
              console.log(
                `At any point, if you are currently using your ${tools.instruments[1].name}, you can buy ${tools.instruments[2].name} for ${tools.instruments[2].price}. You can do this once, assuming you have enough money.`
              );
              decision = prompt(
                `Would you like to buy the ${tools.instruments[2].name} ? `
              );
              if (decision === "yes" || decision === "y") {
                inventory.push(tools.instruments[2].name);
                money -= tools.instruments[2].price;
                console.log(
                  `Using the ${tools.instruments[2].name}, you can spend the day cutting lawns and make ${tools.instruments[2].income}. You can do this as much as you want.`
                );
                while (true) {
                  decision = prompt(
                    `Would you like to begin mowing the lawn with your ${tools.instruments[2].name} ? `
                  );
                  if (decision === "yes" || decision === "y") {
                    money += tools.instruments[2].income;
                    console.log(
                      `You have mowed the lawn with ${tools.instruments[2].name}, you have $${money} `
                    ); // put the property after the index to access the value in the object
                    break firstLoop; // labeling the loop allows you to exit out of the loop you have labeled with break
                  }
                }
              }
            } else {
              console.log(
                `You can continue mowing the lawn with your ${tools.instruments[0].name}`
              );
            }
            if (money >= 500) {
              console.log(
                `At any point, if you are currently using your ${tools.instruments[2].name}, you can buy ${tools.instruments[3].name} for ${tools.instruments[3].price}. You can do this once, assuming you have enough money.`
              );
              decision = prompt(
                `Would you like to buy the ${tools.instruments[3].name} ? `
              );
              if (decision === "yes" || decision === "y") {
                inventory.push(tools.instruments[3].name);
                money -= tools.instruments[3].price;
                console.log(
                  `Using the ${tools.instruments[3].name}, you can spend the day cutting lawns and make ${tools.instruments[2].income}. You can do this as much as you want.`
                );
                while (true) {
                  decision = prompt(
                    `Would you like to begin mowing the lawn with your ${tools.instruments[3].name} ? `
                  );
                  if (decision === "yes" || decision === "y") {
                    money += tools.instruments[3].income;
                    console.log(
                      `You have mowed the lawn with ${tools.instruments[3].name}, you have $${money} `
                    ); // put the property after the index to access the value in the object
                    break firstLoop; // labeling the loop allows you to exit out of the loop you have labeled with break
                  }
                }
              }
            } else {
              console.log(
                `You win the game when you have ${tools.instruments[3].name} and ${tools.instruments[4].price}. `
              );
            }
          } else {
            console.log("You won the game");
          }
        }
      } else {
        console.log("invalid prompt please enter yes or y");
      }
    }
  }
}
//   =====================bug where game breaks after 250 mark and exits loop early.I have formatted things for u to find them easier. =======================//////
