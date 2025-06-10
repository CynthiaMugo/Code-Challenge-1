function calculateBodaFare(distanceInKm) {
    const baseFare = 50;   // Base fare in Ksh(Added every time)
    const chargePerKm = 15; // Charge per kilometer in Ksh

    // Calculate distance charge
    const distanceCharge = distanceInKm * chargePerKm;

    // Calculate the total fare
    const totalFare = baseFare + (chargePerKm * distanceInKm); 
    // const totalFare = baseFare + distanceCharge; // Alternative way to calculate total fare

console.log(`Uko kwote? Io ni ${distanceInKm} km.`);
console.log(`Ukikalia pikipiki: KES ${baseFare}`);
console.log(`Mpaka uko: KES ${distanceCharge}`);
console.log(`Total KES ${totalFare}`);
}

// Prompt the user for the distance in kilometers
const inputDistance = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = Number(inputDistance);

// Validate the input and call the function
if (isNaN(distance) || distance <= 0) {
    console.log("Please enter a valid distance in kilometers.");
} else {
    calculateBodaFare(distance);
}