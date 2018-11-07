/**
 * @param {number[]} sortedArr
 * @param {number} val
 * @return {number | -1 }
 */
function binarySearch(sortedArr, val) {
  let start = 0;
  let end = sortedArr.length - 1;

  // Loop over the array
  while (start <= end) {
    // generate mid value of array
    let middle = Math.floor((start + end) / 2);

    // Condition to check equality of value with mid value
    if (sortedArr[middle] === val) {
      return middle;
    }

    // If value is not equal to mid then change the start and end according to it
    if (sortedArr[middle] > val) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  // If given value doesn't exist in array then return null
  return null;
}

module.exports = { binarySearch };
