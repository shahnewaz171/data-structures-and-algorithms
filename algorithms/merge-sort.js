function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const array = [-7, 20, 8, -2, 4, 5, -9, -1];
const sortedArray = mergeSort(array);
console.log(sortedArray); // sorted array: [-9, -7, -2, -1, 4, 5, 8, 20]

// Time Complexity of Big O Notation: O(n log n)
// Space Complexity of Big O Notation: O(n)
