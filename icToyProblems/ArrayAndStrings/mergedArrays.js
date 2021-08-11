let mergeArrays = (myArray, alicesArray) => {
  let mergedArr = [];

  let myCurrentIndex = 0;
  let aliceCurrentIndex = 0;
  let mergedCurrentIndex = 0;

  while (mergedCurrentIndex < myArray.length + alicesArray.length) {
    let isMyArrExhausted = myCurrentIndex >= myArray.length;
    let isAliceArrExhausted = aliceCurrentIndex >= alicesArray.length;

    if (
      !isMyArrExhausted &&
      (isAliceArrExhausted ||
        myArray[myCurrentIndex] < alicesArray[aliceCurrentIndex])
    ) {
      mergedArr[mergedCurrentIndex] = myArray[myCurrentIndex];
      myCurrentIndex++;
    } else {
      mergedArr[mergedCurrentIndex] = alicesArray[aliceCurrentIndex];
      aliceCurrentIndex++;
    }
    mergedCurrentIndex++;
  }

  return mergedArr;
};
