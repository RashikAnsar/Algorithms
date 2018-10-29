/**
 * Swapping two elements in an array
 * @param {[]} arr
 * @param {number} i1 index of swapping element one
 * @param {number} i2  index of swapping element two
 * @returns {[]} swapped array
 */
function swap(arr, i1, i2) {
  return ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);
}

/**
 *
 * @param {[number]} arr
 * @returns {[number]} sorted array
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let low = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[low]) {
        low = j;
      }
    }
    if (i !== low) {
      swap(arr, i, low);
    }
  }
  return arr;
}

let a = [5, 43, 785, 24, 867, 22];

let b = selectionSort(a);
console.log(b);
