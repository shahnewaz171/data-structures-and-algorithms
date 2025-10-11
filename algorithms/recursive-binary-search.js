// Problem: Given a sorted array of “n” elements and a target element “t”, find the index of “t” in the array. Return -1 if the target element is not found.

function recursiveBinarySearch(arr, target) {
  const leftIndex = 0;
  const rightIndex = arr.length - 1;

  return search(arr, target, leftIndex, rightIndex);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;

  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (arr[middleIndex] === target) return middleIndex;

  if (arr[middleIndex] > target) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

// Time Complexity of Big O Notation: O(log n)
// Space Complexity of Big O Notation: O(log n) due to recursive call stack

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1
