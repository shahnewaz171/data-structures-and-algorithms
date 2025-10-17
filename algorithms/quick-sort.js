function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < pivot) left.push(element);
    else if (element > pivot) right.push(element);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [-7, 20, 8, -2, 4, 5];
const sortedArray = quickSort(array);
console.log(sortedArray); // sorted array: [-7, -2, 4, 5, 8, 20]

// Time Complexity of Big O Notation: O(n^2) worst case, O(n log n) average case
// Space Complexity of Big O Notation: O(n) worst case, O(log n) average case
