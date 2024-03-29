export function totalBirdCount(birdsPerDay) {
    let suma = 0
    for (let i = 0; i < birdsPerDay.length; i++) {
        suma += birdsPerDay[i]

    }
    return suma
}

console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]))