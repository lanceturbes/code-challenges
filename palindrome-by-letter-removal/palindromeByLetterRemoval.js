/*

Given a string of characters, return the index of the character that would need
to be removed for the string to be a palindrome. If the string is already a
palindrome, return -1. If it is not possible for the string to become a
palindrome after the removal of any one of its characters, return -1 as well.

*/

const isPalindrome = (str) => {
  let pointerA = 0;
  let pointerB = str.length - 1;
  const midPoint = Math.floor(str.length / 2);

  for (let i = 0; i < midPoint; i++) {
    if (str[pointerA] !== str[pointerB]) {
      return false;
    }
    pointerA++;
    pointerB--;
  }

  return true;
};

function challenge(s) {
  console.log("string =", s);
  if (isPalindrome(s)) return -1;

  for (let i = 0; i < s.length; i++) {
    const strCopy = [...s];
    strCopy.splice(i, 1);
    if (isPalindrome(strCopy)) return i;
  }

  return -1;
}

const runTest = (challenge) => {
  const testStrings = [
    "aabbaa",
    "abaa",
    "aaaabbbb",
    "a11a1a",
    "quyjjdcgsvvsgcdjjyq",
    "aaababbaaa",
  ];
  const expected = [-1, 1, -1, 1, 1, 4];
  const actual = [];
  for (let string of testStrings) {
    actual.push(challenge(string));
  }
  console.log("Expected:", expected);
  console.log("Actual:", actual);
  console.log("Passed?", String(actual) === String(expected));
};

runTest(challenge);
