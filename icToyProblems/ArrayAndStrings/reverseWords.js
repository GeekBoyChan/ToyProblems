function reverseWords(message) {
  reverseChar(message, 0, message.length - 1);

  let currentStartIndex = 0;

  for (let i = 0; i <= message.length; i++) {
    if (i === message.length || message[i] === ' ') {
      reverseChar(message, currentStartIndex, i - 1);
      currentStartIndex = i + 1;
    }
  }
}

let reverseChar = (message, leftIndex, rightIndex) => {
  while (leftIndex < rightIndex) {
    let temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
};
