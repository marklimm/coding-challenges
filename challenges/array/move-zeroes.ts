//  challenge question comes from https://buttondown.email/cassidoo/archive/we-must-accept-finite-disappointment-but-never
//  Given an integer array, move all 0s to the end of it while maintaining the relative order of the non-zeroes.

/**
 * This function expects an array where the first number is zero, and then swaps that zero with the first non-zero number it finds in the rest of the array
 * @param arr
 * @returns
 */
const swapFirstZeroWithFirstNonZero = (arr: number[]) => {
  // console.log('swapFirstZeroWithFirstNonZero : arr', arr)

  //  exit if the arr is empty or the first element is not 0
  if (arr.length === 0 || arr[0] !== 0) {
    return arr
  }

  const index = arr.findIndex((e) => e > 0)

  if (index === -1) {
    //  no other non-zero number was found, so return the array since it's all zeroes
    return arr
  }

  const tempArray = []

  //  the first value in the tempArray will be the non-zero number
  tempArray.push(arr[index])

  //  fill in any zeroes that occur in between the first "0" and the first non-zero number
  //  ex.  [0, 0, 0, 5, 3] --> there are 2 zeroes in between the first "0" and the "5" which are being swapped.  In this case index would equal 3
  for (let i = 0; i < index - 1; i++) {
    tempArray.push(0)
  }

  //  add the 0 that was originally at the start of the array
  tempArray.push(0)

  const restOfArrayAfterTheNonZeroNumber = arr.slice(index + 1)
  return [...tempArray, ...restOfArrayAfterTheNonZeroNumber]
}

/**
 * Given an integer array, this function moves all 0s to the end of it while maintaining the relative order of the non-zeroes
 * @param arr
 * @returns
 */
const moveZeroes = (arr: number[]) => {
  // console.log('moveZeroes() : arr', arr)

  //  if there's an empty array or an array of one number passed in, then we can't move any numbers
  if (arr.length <= 1) {
    return arr
  }

  let firstNumber = arr[0]
  let tempArr = arr

  if (firstNumber === 0) {
    tempArr = swapFirstZeroWithFirstNonZero(arr)
    firstNumber = tempArr[0]
  }

  const restOfArray = tempArr.slice(1)

  //  first number is greater than zero, so don't move it, and then move onto processing the rest of the array
  return [firstNumber, ...moveZeroes(restOfArray)]
}

export const testMoveZeroes = (): void => {
  console.log('moveZeroes([0, 5])', moveZeroes([0, 5]))
  console.log('moveZeroes([0, 2, 0, 3, 8])', moveZeroes([0, 2, 0, 3, 8]))
  console.log(
    'moveZeroes([1, 2, 3, 0, 0, 4, 5, 0])',
    moveZeroes([1, 2, 3, 0, 0, 4, 5, 0])
  )
}
