const DECIMALS = 3;

// Returns a random integer between the minimum and maximum inclusive
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Returns a random element from the given array
const selectRandomArrayElement = (array) => {
  // Return a random element from the array
  return array[Math.floor(Math.random() * array.length)];
};

// Generates an array of the specified size with incremental integers
const generateNSizeArray = (size) => {
  let array = [];
  // Loop through the size and push each integer to the array
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  
  return array;
};

// Simulates the Monty Hall problem with the specified sample size, keep option, and number of doors
const simulateMonty = (sampleSize, keep = false, numberOfDoors = 3) => {
  
  let wins = 0;
  
  let doors = generateNSizeArray(numberOfDoors);
  // Loop through the sample size
  for (let i = 0; i < sampleSize; i++) {
    
    let options = doors;
    // Randomly choose the prize position
    let prizePosition = getRandomInt(0, numberOfDoors - 1);
    // Randomly choose the player's pick
    let playerPick = getRandomInt(0, numberOfDoors - 1);
    // Show options are the doors that don't contain the prize or the player's pick
    let showOptions = doors.filter(
      (door) => door !== prizePosition && door !== playerPick
    );
    let showed = selectRandomArrayElement(showOptions);
    // Remove the showed door from the options
    options = options.filter((option) => option !== showed);
    // If the player does not keep their pick, randomly choose a different option
    if (!keep) {
      playerPick = selectRandomArrayElement(
        options.filter((option) => option !== playerPick)
      );
    }
    if (playerPick === prizePosition) {
      wins += 1;
    }
  }
  // Return an object with the simulation results
  return {
    sampleSize: Number(sampleSize),
    wins: wins,
    keep: keep,
    numberOfDoors: numberOfDoors,
    winRate: Number((wins / sampleSize).toFixed(DECIMALS)),
  };
};

// Export the simulateMonty function
module.exports = { simulateMonty };
