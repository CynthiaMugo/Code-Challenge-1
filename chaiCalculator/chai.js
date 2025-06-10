// A simple calculator to determine the basic ingredients needed to make a specific number of cups of Kenyan chai.
function calculateChaiIngredients() {
  const inputString = prompt("Karibu! How many cups of Chai Bora would you like to make?");
        const cups = parseInt(inputString);

        // Validate input
        if (isNaN(cups) || cups <= 0) {
            alert(`Please enter a valid number of cups.`);
            return;
            }

    // Variables for the ingredients per cup
    const waterPerCup = 200; // ml of water per cup
    const milkPerCup = 100; // ml of milk per cup
    const teaLeavesPerCup = 2; // teaspoons of tea leaves per cup
    const sugarPerCup = 1; // teaspoons of sugar per cup

    
    // Variables to hold the total amounts needed
    const totalWater = cups * waterPerCup;
    const totalMilk = cups * milkPerCup;
    const totalTeaLeaves = cups * teaLeavesPerCup;
    const totalSugar = cups * sugarPerCup;

    alert(`To make ${cups} cups of Kenyan Chai, you will need:
        Water: ${totalWater} ml
        Milk: ${totalMilk} ml
        Tea Leaves (Majani): ${totalTeaLeaves} tablespoons
        Sugar (Sukari): ${totalSugar} teaspoons
        \nEnjoy your Chai Bora!
        `);
}
// Call the function
calculateChaiIngredients(); 
