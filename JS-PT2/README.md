# 🥤 Smart Vending Machine — JavaScript Project

This project simulates a **vending machine system** using **JavaScript**, focusing on **logical** and **arithmetic operators**.  
It takes an **item code** and **money input**, then checks:
- If the user has enough money 💰  
- Calculates change (if any)  
- Displays messages based on purchase results  

---

## ⚙️ Features
- Supports 3 items:
  - `A1` → Chocolate 🍫 (Cost: 50)
  - `A2` → Crisps 🍟 (Cost: 30)
  - `A3` → Soda 🥤 (Cost: 40)
- Uses logical (`&&`, `||`) and arithmetic (`-`, `<`, `>`, `===`) operators
- Displays correct messages for:
  - Less money
  - Exact money
  - Extra money (shows change)
- Case-insensitive item input
- Includes **interactive CLI version**

---

## 🧠 Concepts Covered
- Conditional Statements (`if`, `else if`, `else`)
- Logical Operators (`&&`, `||`)
- Arithmetic Operators
- Input Handling using `prompt-sync`
- Clean Console-based Output

---

## 🚀 How to Run

1. Clone this repo:
   ```bash
   git clone https://github.com/YOUR-USERNAME/smart-vending-machine.git
   cd smart-vending-machine
Install dependency:

bash
Copy code
npm install prompt-sync
Run the program:

bash
Copy code
node vendingMachine.js
🧪 Example Outputs
Example 1
yaml
Copy code
Enter item code: A1
Enter money: 50
You are buying CHOCOLATES 🍫
THANKS FOR BUYING!
Example 2
pgsql
Copy code
Enter item code: A2
Enter money: 20
You are buying CRISPS 🍟
PLZZ add more money!
Example 3
yaml
Copy code
Enter item code: A3
Enter money: 60
You are buying SODA 🥤
Here is your change: 20
THANKS FOR BUYING!
🧩 Bonus
Includes interactive CLI mode for user input.

Can be extended easily with more items or GUI (HTML/JS frontend).

💡 Future Improvements
Add GUI version using HTML/CSS/JS

Store transaction history

Add balance persistence using localStorage