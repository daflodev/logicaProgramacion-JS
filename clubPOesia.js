let poema = [
    'Stands so high ',
    'Huge hooves too ',
    'Impatiently waits for ',
    'Reins and harness ',
    'Eager to leave '
]
const CODE_WORK = [
    'Compilers intensily bestow',
    'On commencing without ego',
    'Different processes ajar',
    'Exit with zero quick',
];


const SHIRE_HORSE_WITH_SPACES = [
    'Stands so high   ',
    '\tHuge hooves too\t',
    'Impatiently waits for \t \t',
    '    Reins and harness    ',
    'Eager to leave\n\n',
];


// solucion basica 
export function frontDoorPassword(word) {
  
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

// solucion robusta

// export function frontDoorResponse(line) {
//     for (let i = 0; i < line.length; i++) {
//         let start = line[i].charAt(0)
//         return start
//     }
// }


// console.log(frontDoorResponse(poema))



// solucion basica
export function backDoorResponse(line) {
    return line.trim().slice(-1);
  }

  // solucion robusta

// export function frontDoorPassword(word) {
//     let starts = [];
//     for (let i = 0; i < word.length; i++) {
//         let palabra = word[i].charAt(0).toLowerCase();

//         starts.push(palabra)
//     }

//     let str = starts.join('').charAt(0).toUpperCase()
//     let resString = starts.slice(1).join('')

//     let sumaSTR = str + resString

//     return sumaSTR;
// }

// console.log(frontDoorPassword(poema))

// solucion basica
export function backDoorPassword(word) {
    return frontDoorPassword(word) + ", please";
  }

 // solucion robusta

// export function backDoorPassword(word) {
//     let starts = [];
//         for (let i = 0; i < word.length; i++) {
//             let palabra = word[i].trim().toLowerCase();
//             console.log(palabra)
//             let oracion = palabra.charAt(palabra.length - 1)
//             console.log(oracion)
//             starts.push(oracion)
//         }
    
//         let str = starts.join('').charAt(0).toUpperCase()
//         let resString = starts.slice(1).join('')
    
//         let sumaSTR = str + resString + ", please"
    
//         return sumaSTR;
// }




// console.log(backDoorPassword(poema))
