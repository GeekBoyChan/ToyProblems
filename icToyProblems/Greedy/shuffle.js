let getRandom = (floor, ceiling) => {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
};

let shuffle = (array) => {
  // Shuffle the input in place
  if (array.length <= 1) {
    return;
  }

  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    let randomIndex = getRandom(currentIndex, array.length - 1);

    if (currentIndex !== randomIndex) {
      let temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
  }
};

const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);
