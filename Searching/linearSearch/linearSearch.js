/**
 *
 * @param {number[]} arr
 * @param {number} val
 * @return {number[] | -1 }
 */
function linearSearch(arr, val) {
  // Initialize an empty array to store indices
  let indices = [];
  // loop over the array
  for (let i in arr) {
    // check for equality and push indices into empty array
    if (arr[i] === val) {
      indices.push(i);
    }
  }
  // return the indices array if it length is > 0
  if (indices.length) return indices;
  // return -1 if value doesn't exist
  return -1;
}

module.exports = { linearSearch };
