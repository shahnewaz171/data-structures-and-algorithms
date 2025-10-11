function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }
  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

towerOfHanoi(3, "A", "B", "C");

// Time Complexity of Big O Notation: O(2^n - 1)
// Space Complexity of Big O Notation: O(n) where n is the number of disks and due to the recursion stack depth.
