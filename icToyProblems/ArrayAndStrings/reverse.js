let reverse = (charArray) => {
  let leftIndex = 0;
  let rightIndex = charArray.length - 1;

  while (leftIndex < rightIndex) {
    let temp = charArray[leftIndex];
    charArray[leftIndex] = charArray[rightIndex];
    charArray[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
};
