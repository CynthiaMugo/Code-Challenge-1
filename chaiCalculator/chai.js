// A simple calculator to determine the basic ingredients needed to make a specific number of cups of Kenyan chai.
function calculateChaiIngredients(cups) {
    const waterPerCup = 200; // ml of water per cup
    const milkPerCup = 100; // ml of milk per cup
    const teaLeavesPerCup = 2; // teaspoons of tea leaves per cup
    const sugarPerCup = 1; // teaspoons of sugar per cup

    const totalWater = cups * waterPerCup; // total water in ml
    const totalMilk = cups * milkPerCup; // total milk in ml
    const totalTeaLeaves = cups * teaLeavesPerCup; // total tea leaves in teaspoons
    const totalSugar = cups * sugarPerCup; // total sugar in teaspoons

    return {
        water: totalWater,
        milk: totalMilk,
        teaLeaves: totalTeaLeaves,
        sugar: totalSugar
    };
}
if (isNaN(cups) || cups <= 0) {
    alert("Please provide a valid number of cups.");
    return;
}