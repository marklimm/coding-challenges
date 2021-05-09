//  challenge question comes from https://buttondown.email/cassidoo/archive/can-words-describe-the-fragrance-of-the-very
//  Given an array of 0s and 1s that represent a garden, where 0 is a plot that hasn’t been planted on, and 1 is a plot that has been planted on, return true if n plants can be planted without touching another plant.

const numPlotsThatCanBePlanted = (arr: number[]) => {
  //  this recursive function is only concerned with whether a plant can be plotted within the first 2 spaces of the array.  It makes that decision, then it recursively calls on the next possible location that is known could possibly be available to plant on

  if (arr.length === 0) {
    return 0
  }

  if (arr.length === 1) {
    return arr[0] === 0 ? 1 : 0
  }

  /*
  [0, 0] --> we can plant 1 and have to move 2 spaces before we can potentially plant another
  [1, 0] --> we can't plant and have to move 2 spaces before we can potentially plant another
  [0, 1] --> we can't plant and have to move 3 spaces before we can potentially plant another
  [1, 1] --> we can't plant and have to move 3 spaces before we can potentially plant another
*/

  const canPlantAtThisSpot = arr[0] === 0 && arr[1] === 0

  if (arr[1] === 0) {
    //  the next possible place we can plant is two spaces away

    //  add to the count if we can plant and then continue with the rest
    return (canPlantAtThisSpot ? 1 : 0) + numPlotsThatCanBePlanted(arr.slice(2))
  } else {
    //  the next possible place we can plant is three spaces away
    return numPlotsThatCanBePlanted(arr.slice(3))
  }
}

const canPlant = (arr: number[], requestedPlots = 0): boolean => {
  const totalNum = numPlotsThatCanBePlanted(arr)

  return totalNum >= requestedPlots
}

export const testCanPlant = (): void => {
  //  can plant 1
  const garden = [1, 0, 0, 0, 1]

  console.log('canPlant(garden, 1)', canPlant(garden, 1))
  console.log('canPlant(garden, 2)', canPlant(garden, 2))

  //  can plant 2
  const garden2 = [0, 1, 0, 0, 1, 0, 0, 0]

  console.log('canPlant(garden2, 1)', canPlant(garden2, 1))
  console.log('canPlant(garden2, 2)', canPlant(garden2, 2))

  //  can plant 1
  const garden3 = [0, 0, 1, 1, 0]
  console.log('canPlant(garden3, 1)', canPlant(garden3, 1))
  console.log('canPlant(garden3, 2)', canPlant(garden3, 2))
}
