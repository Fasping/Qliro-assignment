const DECIMALS = 3;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const selectRandomArrayElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateNSizeArray = (size) => {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
};

const simulateMonty = (sampleSize, keep = false, numberOfDoors = 3) => {
  let wins = 0;
  let doors = generateNSizeArray(numberOfDoors);
  for (let i = 0; i < sampleSize; i++) {
    let options = doors;
    let prizePosition = getRandomInt(0, numberOfDoors - 1);
    let playerPick = getRandomInt(0, numberOfDoors - 1);
    let showOptions = doors.filter(
      (door) => door !== prizePosition && door !== playerPick
    );
    let showed = selectRandomArrayElement(showOptions);
    options = options.filter((option) => option !== showed);
    if (!keep) {
      playerPick = selectRandomArrayElement(
        options.filter((option) => option !== playerPick)
      );
    }
    if (playerPick === prizePosition) {
      wins += 1;
    }
  }
  return {
    sampleSize: Number(sampleSize),
    wins: wins,
    keep: keep,
    numberOfDoors: numberOfDoors,
    winRate: Number((wins / sampleSize).toFixed(DECIMALS)),
  };
};

// console.log(simulateMonty(10000,false,3))
// console.log(simulateMonty(10000,true,3))

module.exports = { simulateMonty };
