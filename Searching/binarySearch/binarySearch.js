/**
 * @param {number[]} sortedArr
 * @param {number} val
 * @return {number | -1 }
 */
function binarySearch(sortedArr, val) {
  let start = 0;
  let end = sortedArr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArr[middle] === val) {
      return middle;
    }

    if (sortedArr[middle] > val) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return null;
}

let a = [1, 12, 23, 45, 65, 67, 78, 98, 233];
let z = binarySearch(a, 12);
console.log(z);
