function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;

    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const array = [5, 3, 8, 1, 2];
bubbleSort(array);
console.log(array); // sorted array: [1, 2, 3, 5, 8]

// Time Complexity of Big O Notation: O(n^2)
// Space Complexity of Big O Notation: O(1)
