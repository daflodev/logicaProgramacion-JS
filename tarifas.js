export function dayRate(ratePerHour) {
    let tarifa = ratePerHour * 8
    return tarifa
}
// console.log(dayRate(16))


export function daysInBudget(budget, ratePerHour) {

    const rest = budget - dayRate(ratePerHour)

    if (budget <= 0) {
        let days;
        return days = 0

    } else {
        let days = rest / dayRate(ratePerHour) + 1
        let daysrended = Math.floor(days)
        return daysrended
    }
}


export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let totalMonths = Math.floor(numDays / 22);
    console.log(totalMonths)

    let totalHours = numDays * 8;
    console.log(totalHours)


    let totalCost = ratePerHour * totalHours;
    console.log(totalCost)
    
    let costForRemainingDays = (numDays % 22); // días restantes
    
    let totalDaysForMonths = totalMonths * 22   // dias por el total de meses



    if (discount === 0) {
        return totalCost;
    } else if (costForRemainingDays === 0 || costForRemainingDays === 1){ 
        let final = costForRemainingDays * dayRate(ratePerHour)
        let costForMonth = totalDaysForMonths * dayRate(ratePerHour) + 1; // Costo total de los meses completos
        let totalCostWithDiscount = costForMonth * (1 - discount) + final; // Aplicar descuento solo a los meses completos

        return Math.round(totalCostWithDiscount);

    } else {
        let final = costForRemainingDays * dayRate(ratePerHour)
        console.log(final)
        let costForMonth = totalDaysForMonths * dayRate(ratePerHour); // Costo total de los meses completos
        let totalCostWithDiscount = costForMonth * (1 - discount) + final; // Aplicar descuento solo a los meses completos

        return Math.round(totalCostWithDiscount);
    }



}

console.log(priceWithMonthlyDiscount(29.654321, 155, 0.2547));
