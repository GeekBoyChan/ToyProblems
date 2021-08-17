let canTwoMoviesFillFlight = (movieLengths, flightLength) => {
  // Determine if two movie runtimes add up to the flight length
  let movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    let currentMovieLength = movieLengths[i];
    let goalSecondLength = flightLength - currentMovieLength;

    if (movieLengthsSeen.has(goalSecondLength)) {
      return true;
    }

    movieLengthsSeen.add(currentMovieLength);
  }

  return false;
};
