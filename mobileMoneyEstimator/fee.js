function estimateTransactionFee(amountToSend) {
    // Sulution
    const transactionFee = 0.015; // 1.5% transaction fee
    const minFee = 10; // Minimum fee in KES
    const maxFee = 70; // Maximum fee in KES

    // Calculate the fee based on the amount to send
    const calculatedFee = amountToSend * transactionFee;

    // Conditional logic to calculate the fee
    if (calculatedFee < minFee) {
        finalFee = minFee; // Return minimum fee if calculated fee is less than minimum
    } else if (calculatedFee > maxFee) {
        finalFee = maxFee; // Return maximum fee if calculated fee is more than maximum
    } else {
        finalFee = calculatedFee; // Return the calculated fee if it is within the range
    }

    // Calculate the total amount to be debited
    const totalDebited = amountToSend + finalFee;
   

console.log(`Sending KES ${amountToSend}`);
console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
console.log(`Total amount to be debited: KES ${totalDebited}`);
console.log(`\nSend Money Securely!`);
}

// Prompt the user for the amount to send
const inputAmount = prompt("Unatuma Ngapi? (KES):");
const amount = Number(inputAmount);

// Validate the input and call the function
if (isNaN(amount) || amount <= 0) {
    console.log("Please enter a valid amount in Kenyan Shillings (KES).");
} else {
    estimateTransactionFee(amount);
}

// Test with 500, 2000 & 10000
// Error encountered - using return in the if...else block made my code stop executing after line 17 hence used another variable finalFee