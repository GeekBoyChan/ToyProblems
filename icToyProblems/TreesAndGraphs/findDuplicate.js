function findDuplicate(intArray) {
  // Find a number that appears more than once ... in O(n) time
  let n = intArray.length - 1;
  let cyclePosition = intArray.length;

  for (let i = 0; i < n; i++) {
    cyclePosition = intArray[cyclePosition - 1];
  }

  let pointerReference = cyclePosition;
  let findReference = intArray[pointerReference - 1];
  let cycleCount = 1;

  while (findReference !== pointerReference) {
    findReference = intArray[findReference - 1];
    cycleCount++;
  }

  let pointerStart = n + 1;
  let pointerAhead = n + 1;
  for (let j = 0; j < cycleCount; j++) {
    pointerAhead = intArray[pointerAhead - 1];
  }

  while (pointerStart !== pointerAhead) {
    pointerStart = intArray[pointerStart - 1];
    pointerAhead = intArray[pointerAhead - 1];
  }

  return pointerStart;
}

// Tests

let desc = 'just the repeated number';
let actual = findDuplicate([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'short array';
actual = findDuplicate([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findDuplicate([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findDuplicate([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
