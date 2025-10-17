function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const array = [-6, 20, 8, -2, 4];
insertionSort(array);
console.log(array); // sorted array: [-6, -2, 4, 8, 20]

// Time Complexity of Big O Notation: O(n^2)
// Space Complexity of Big O Notation: O(1)
