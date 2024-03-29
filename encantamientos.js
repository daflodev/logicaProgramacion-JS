export function getItem(cards, position) {
    return cards[position]
}

// console.log(getItem([1, 2, 3, 4, 5,], 2))



export function setItem(cards, position, replacementCard) {
    cards.splice(position, 0, replacementCard)
    return cards
}


// console.log(setItem([1, 2, 3, 4, 5], 0, 6))



export function insertItemAtTop(cards, newCard) {

    cards.push(newCard)
    return cards
}

// console.log(insertItemAtTop([1, 2, 3, 4, 5,], 6))


export function removeItem(cards, position) {
    cards.splice(position, 1)
    return cards
}

// console.log(removeItem([1, 2, 3, 4, 5, 6], 2))

export function removeItemFromTop(cards) {
    cards.pop()
    return cards
  }
  

//   console.log(removeItemFromTop([1, 2, 3, 4, 5, 6]))


export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards
  }


//   console.log(insertItemAtBottom([1,2,3,4,5], 0))


export function removeItemAtBottom(cards) {
    cards.shift()
    return cards
  }

//   console.log(removeItemAtBottom([1,2,3,4,5]))



  export function checkSizeOfStack(cards, stackSize) {
   if(cards.length !== stackSize){
    return false;

   }else {
    return true;
   }
  }


//   console.log(checkSizeOfStack([1,2,3,4,5]))