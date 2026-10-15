
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter bill amount: ", function(billInput) {
    rl.question("Enter tip percentage: ", function(tipInput) {
        const subtotal = Number(billInput);
        const tipPercentage = Number(tipInput);

        const tip = subtotal * tipPercentage / 100;
        let total = subtotal;
        total += tip;

        console.log("\nName: Pavithra");
        console.log("Subtotal: $" + subtotal);
        console.log("Tip Percentage: " + tipPercentage + "%");
        console.log("Calculated Tip: $" + tip);
        console.log("Total Amount to Pay: $" + total);

        rl.close();
    });
});
