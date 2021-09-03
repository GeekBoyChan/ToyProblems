function isValid(code) {
  // Determine if the input code is valid
  let bracketPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let openers = new Set(['(', '[', '{']);
  let closers = new Set([')', ']', '}']);

  let openerStack = [];

  for (let i = 0; i < code.length; i++) {
    let char = code[i];

    if (openers.has(char)) {
      openerStack.push(char);
    } else if (closers.has(char)) {
      if (!openerStack.length) {
        return false;
      }
      let mostRecentOpener = openerStack.pop();

      if (bracketPairs[mostRecentOpener] !== char) {
        return false;
      }
    }
  }

  return openerStack.length === 0;
}

// Tests

let desc = 'valid short code';
assertEqual(isValid('()'), true, desc);

desc = 'valid longer code';
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);

desc = 'mismatched opener and closer';
assertEqual(isValid('([][]}'), false, desc);

desc = 'missing closer';
assertEqual(isValid('[[]()'), false, desc);

desc = 'extra closer';
assertEqual(isValid('[[]]())'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
