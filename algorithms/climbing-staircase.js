// Problem: Given a staircase of 'n' steps, find the number of distinct ways to climb to the top.

function climbingStaircase(n) {
  const noOfWays = [1, 2];

  for (let i = 2; i < n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}

console.log(climbingStaircase(4)); // 5 ways

// Time Complexity: O(n)
// Space Complexity: O(n) due to the array used to store intermediate results
