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

module.exports = { linearSearch };
