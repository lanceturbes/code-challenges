/*

In a 2n x 2n matrix, you are allowed to invert only entire rows or columns to
shift the numbers of this matrix around.

What is the maximum possible sum of all numbers in the top-left quadrant that
you can produce via these shifts, if you have no limits on the number of times
you can perform shifting?

*/

const runChallenge = (matrix) => {
  let sum = 0;

  const quadrantWidth = matrix[0].length / 2;
  const quadrantHeight = matrix.length / 2;
  const matrixWidth = matrix[0].length;
  const matrixHeight = matrix.length;

  for (let x = 0; x < quadrantWidth; x++) {
    for (let y = 0; y < quadrantHeight; y++) {
      const squareA = matrix[x][y];
      const squareB = matrix[matrixWidth - x - 1][y];
      const squareC = matrix[x][matrixHeight - y - 1];
      const squareD = matrix[matrixWidth - x - 1][matrixHeight - y - 1];

      sum += Math.max(squareA, squareB, squareC, squareD);
    }
  }

  console.log("Max Possible Sum of Upper-Left Quadrant:", sum);
  return sum;
};

const runTest = (challenge) => {
  const expected = 90;

  const testMatrix = [
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [18, 19, 20, 21],
    [22, 23, 24, 25],
  ];
  console.log("Test Matrix:", testMatrix);
  const actual = challenge(testMatrix);

  return actual === expected;
};

console.log("Correct Answer?", runTest(runChallenge));
