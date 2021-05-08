

//  challenge question comes from https://buttondown.email/cassidoo/archive/to-make-others-less-happy-is-a-crime-to-make
//  Write a function that takes in a string and reverses all the vowels in the string.


const vowels = ['a', 'e', 'i', 'o', 'u']


const isVowel = (letter = '') => {
  // console.log('letter', letter)

  return vowels.includes(letter.toLowerCase())
}

/**
 * function that takes in a string and reverses all the vowels in the string.
 * @param theString 
 * @returns 
 */
const reverseVowels = (theString = '') => {

  // console.log('reverseVowels() : theString', theString)

  //  return a single character or empty string if that's what was passed in (even if its a vowel there's nothing to reverse it with)
  if (theString.length <= 1) { return theString}

  
  const firstChar = theString[0]
  const lastChar = theString[theString.length - 1]


  if (!isVowel(firstChar)) {
    //  the first character is not a vowel, so don't swap it
    const everythingAfterFirstChar = theString.slice(1)
    return firstChar + reverseVowels(everythingAfterFirstChar)
    // console.log('everythingAfterFirstChar, ', everythingAfterFirstChar)
    // return
  }
  
  if (!isVowel(lastChar)) {
    //  the last character is not a vowel, so don't swap it
    const everythingBeforeLastChar = theString.slice(0, theString.length - 1)
    return reverseVowels(everythingBeforeLastChar) + lastChar
    // console.log('everythingBeforeLastChar', everythingBeforeLastChar)
    // return 
  } 

    //  both the first and last character are both vowels
    //  do the swap

    const everythingInBetween = theString.slice(1, theString.length - 1)

    return lastChar + reverseVowels(everythingInBetween) + firstChar
  
}


export const testSwapVowels = () => {

  console.log('reverseVowels(\'I love burritos\')', reverseVowels('I love burritos'))
  console.log('reverseVowels(\'spicy food is the best!\')', reverseVowels('spicy food is the best!'))
}


