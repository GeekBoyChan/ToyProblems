let highestProductOf3 => (arrayOfInts) {
  // Calculate the highest product of three numbers
  if (arrayOfInts.length <= 2) {
    throw new Error('Array must contain at least 3 ints');
  }

  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  let highestProdOf2 = highest * lowest;
  let lowestProdOf2 = highest * lowest;

  let highestProdOf3 = highest * lowest * arrayOfInts[2];

  for (let i = 2; i < arrayOfInts.length; i++) {
    let current = arrayOfInts[i];

    highestProdOf3 = Math.max(
      highestProdOf2 * current,
      lowestProdOf2 * current,
      highestProdOf3
    );

    highestProdOf2 = Math.max(
      highest * current,
      lowest * current,
      highestProdOf2
    );
    lowestProdOf2 = Math.min(
      lowest * current,
      highest * current,
      lowestProdOf2
    );

    highest = Math.max(current, highest);
    lowest = Math.min(current, lowest);
  }

  return highestProdOf3;
}

// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}