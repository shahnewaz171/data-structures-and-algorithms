// Adjacency Matrix representation
// For a graph with vertices A, B, C (indices 0, 1, 2)
// matrix[i][j] = 1 means there's an edge from vertex i to vertex j
// matrix[i][j] = 0 means no edge

const matrix = [
  [0, 1, 0], // A connects to B
  [1, 0, 1], // B connects to A and C
  [0, 1, 0], // C connects to B
];

console.log("Connection from A to B:", matrix[0][1]); // 1 (connected)
console.log("Connection from A to C:", matrix[0][2]); // 0 (not connected)
console.log("Connection from B to C:", matrix[1][2]); // 1 (connected)

// Check if edge exists between two vertices
function hasEdge(matrix, from, to) {
  return matrix[from][to] === 1;
}

console.log("Has edge from A(0) to B(1):", hasEdge(matrix, 0, 1));
console.log("Has edge from A(0) to C(2):", hasEdge(matrix, 0, 2));

// Time Complexity: O(1) for checking edge existence
// Space Complexity: O(V^2) where V is the number of vertices
