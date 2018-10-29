function swapping(arr, i1, i2) {
  return ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);
}

function bubbleSort(arr) {
  let swap;
  for (let i = arr.length; i > 0; i--) {
    swap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapping(arr, j, j + 1);
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
}

let a = [8, 7, 6, 5, 4, 3, 2, 1];
let b = bubbleSort(a);
console.log(b);
