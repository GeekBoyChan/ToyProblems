function getClosingParen(sentence, openingParenIndex) {
  // Find the position of the matching closing parenthesis
  let parensCounter = 0;

  for (
    let position = openingParenIndex + 1;
    position < sentence.length;
    position++
  ) {
    let char = sentence[position];

    if (char === '(') {
      parensCounter++;
    } else if (char === ')') {
      if (parensCounter === 0) {
        return position;
      }

      parensCounter--;
    }
  }

  throw new Error('No corresponding closing parenthesis found');
}

// Tests

let desc = 'all openers then closers';
let actual = getClosingParen('((((()))))', 2);
let expected = 7;
assertEqual(actual, expected, desc);

desc = 'mixed openers and closers';
actual = getClosingParen('()()((()()))', 5);
expected = 10;
assertEqual(actual, expected, desc);

desc = 'no matching closer';
const noCloser = () => getClosingParen('()(()', 2);
assertThrowsError(noCloser, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
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
