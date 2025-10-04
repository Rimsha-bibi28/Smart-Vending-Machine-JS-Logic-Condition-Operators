function vendingMachine(code, money) {
  const prices = {
    A1: 50,
    A2: 30,
    A3: 40
  };

  code = code.toUpperCase();

  console.log("\n-----------------------------");
  console.log(`Item Code Entered: ${code}`);
  console.log(`Money Inserted: ${money}`);

  if (code in prices) {
    const price = prices[code];

    if (code === "A1") console.log("You are buying CHOCOLATES 🍫");
    else if (code === "A2") console.log("You are buying CRISPS 🍟");
    else if (code === "A3") console.log("You are buying SODA 🥤");

    if (money < price && money > 0) {
      console.log("PLZZ add more money!");
    } 
    else if (money === price) {
      console.log("THANKS FOR BUYING!");
    } 
    else if (money > price) {
      const change = money - price;
      console.log(`Here is your change: ${change}`);
      console.log("THANKS FOR BUYING!");
    } 
    else {
      console.log("Invalid money amount entered!");
    }

  } else {
    console.log("Invalid code! Please select A1, A2, or A3.");
  }

  console.log("-----------------------------\n");
}

vendingMachine("A1", 50);
vendingMachine("A2", 20);
vendingMachine("A3", 60);
vendingMachine("B1", 100);
vendingMachine("a1", 30);


const prompt = require("prompt-sync")();

const userCode = prompt("Enter item code (A1, A2, A3): ");
const userMoney = parseInt(prompt("Enter your money amount: "), 10);

vendingMachine(userCode, userMoney);