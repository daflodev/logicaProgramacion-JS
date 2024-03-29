export function chooseVehicle(option1, option2) {
    if (option1.localeCompare(option2) < 0) {
        return option1 + ' is clearly the better choice.';
    } else {
        return option2 + ' is clearly the better choice.';
    }
}

//   console.log(chooseVehicle('Ford Pinto', 'Bugatti Veyron'));



export function calculateResellPrice(originalPrice, age) {
    let percente;
    if (age >= 3 && age <= 10) {
        let priceFinal;
        percente = 0.7;
        priceFinal = originalPrice * percente
        return priceFinal
    } else if (age > 10) {
        let priceFinal;
        percente = 0.5;
        priceFinal = originalPrice * percente
        return priceFinal

    }else if (age < 3){
        let priceFinal;
        percente = 0.8;
        priceFinal = originalPrice * percente
        return priceFinal

    }else{
        return originalPrice
    }
}


console.log(calculateResellPrice(1000,1))