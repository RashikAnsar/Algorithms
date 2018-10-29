/**
 *
 * @param {number[]} arr
 * @param {number} val
 * @return {number[] | -1 }
 */
function linearSearch(arr, val) {
  let indices = [];
  for (let i in arr) {
    if (arr[i] === val) {
      indices.push(i);
    }
  }
  if (indices.length) return indices;

  return -1;
}

let a = [1, 2, 3, 1, 1, 525, 5884, 545, 6854, 3, 1, 4];

let x = linearSearch(a, 243);
console.log(x);
