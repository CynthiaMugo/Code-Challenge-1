function calculateBodaFare() {
    const inputDistance = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    const distance = parseInt(inputDistance);

    // Validate input
    if (isNaN(distance) || distance <= 0) {
        alert(`Please enter a vaid number!`)
        return;
    }

    const baseFare = 50;   // Base fare in Ksh(Added every time)
    const chargePerKm = 15; // Charge per kilometer in Ksh

    // Calculate distance charge
    const totalCharge = distance * chargePerKm;

    // Calculate the total fare
    const totalFare = baseFare + totalCharge;

    // Message to output
    alert(`Uko kwote? Io ni ${distance} km.
        Ukikalia pikipiki: KES ${baseFare}
        Mpaka uko: KES ${totalCharge}
        \n Total: KES ${totalFare}
        `);
}
calculateBodaFare()