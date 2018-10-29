/**
 *
 * @param {[number]} arr
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentElement;
  }
  return arr;
}

let a = [2, 1, 3, 7, 4];
let b = insertionSort(a);
console.log(b);
