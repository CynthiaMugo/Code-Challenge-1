// A simple calculator to determine the basic ingredients needed to make a specific number of cups of Kenyan chai.
function calculateChaiIngredients(numOfCups) {
    // Variables for the ingredients per cup
    const waterPerCup = 200; // ml of water per cup
    const milkPerCup = 100; // ml of milk per cup
    const teaLeavesPerCup = 2; // teaspoons of tea leaves per cup
    const sugarPerCup = 1; // teaspoons of sugar per cup

    
    // Variables to hold the total amounts needed
    const totalWater = numOfCups * waterPerCup; // total water in ml
    const totalMilk = numOfCups * milkPerCup; // total milk in ml
    const totalTeaLeaves = numOfCups * teaLeavesPerCup; // total tea leaves in teaspoons
    const totalSugar = numOfCups * sugarPerCup; // total sugar in teaspoons

    // return {
    //     water: totalWater,
    //     milk: totalMilk,
    //     teaLeaves: totalTeaLeaves,
    //     sugar: totalSugar
    // };

  console.log(`To make ${numOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");
}

// Prompt user input
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const cups = Number(input);

// Call the function
if (isNaN(cups) || cups <= 0) {
    console.log("Please enter a valid number of cups.");
} else {
  calculateChaiIngredients(cups);
  
}