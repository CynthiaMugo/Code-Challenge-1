function estimateTransactionFee() {
    const inputAmount = prompt("Unatuma Ngapi? (KES):");
    const amount = parseInt(inputAmount);
    // Validate input
    if (isNaN(amount) || amount <= 0) {
        alert(`Please enter a valid amount`);
    return;
    }

    // Solution
    const transactionFee = 0.015; // 1.5% transaction fee
    // const minFee = 10; // Minimum fee in KES
    // const maxFee = 70; // Maximum fee in KES

    // Calculate the fee based on the amount to send
    const calculatedFee = amount * transactionFee;

    // Conditional logic to calculate the fee
    if (calculatedFee < 10) {
        finalFee = 10; // Return minimum fee if calculated fee is less than minimum
    } else if (calculatedFee > 70) {
        finalFee = 70; // Return maximum fee if calculated fee is more than maximum
    } else {
        finalFee = calculatedFee; // Return the calculated fee if it is within the range
    }

    // Calculate the total amount to be debited
    const totalFee = amount + finalFee;

    alert(`Sending KES ${amount}
        Calculated Transaction Fee: KES ${calculatedFee}
        Total amount to be debited: KES ${totalFee}
        \nSend Money Securely!
        `);

}
estimateTransactionFee()

// Test with 500, 2000 & 10000
// Error encountered - using return in the if...else block made my code stop executing after line 20 hence used another variable finalFee