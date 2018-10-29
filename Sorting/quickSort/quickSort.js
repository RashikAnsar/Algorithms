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

function pivot(arr, begin = 0, end = arr.length + 1) {
  let pivot = arr[begin];
  let swapIdx = begin;
  for (let i = begin + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, begin, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

let a = quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
console.log(a);
