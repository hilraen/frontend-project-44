import getRandomInt from '../utils.js';
import runGame, { numOfRounds } from '../coreLogic.js';

const arProgressionLength = 10;
const description = 'What number is missing in the progression?';

const getArray = () => {
  const arr = [];
  const startNum = getRandomInt(0, 20);
  const step = getRandomInt(1, 20);
  for (let i = 0; i < arProgressionLength; i += 1) {
    arr.push(startNum + i * step);
  }
  return arr;
};

const makeRound = () => {
  const progression = getArray();
  const indexOfNumToGuess = getRandomInt(0, arProgressionLength - 1);
  const correctAnswer = String(progression[indexOfNumToGuess]);
  progression[indexOfNumToGuess] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runArProgressionGame = () => {
    runGame(makeRound, description);
};

export default runArProgressionGame;
