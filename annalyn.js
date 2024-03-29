export function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent,
) {
    let liberatePrisoner = false;
    if (petDogIsPresent && !archerIsAwake) {
        return liberatePrisoner = true;
    } else if (!petDogIsPresent && !knightIsAwake && !archerIsAwake && prisonerIsAwake) {
        return liberatePrisoner = true;
    } else {
        return liberatePrisoner;
    }
}



console.log(canFreePrisoner(true, true, true, true)); // false