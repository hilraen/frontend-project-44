import getRandomInt from '../utils.js';
import runGame from '../coreLogic.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGCD(num2 % num1, num1);
};

const makeRound = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const correctAnswer = String(getGCD(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

const runGCDGame = () => {
  runGame(makeRound, description);
};

export default runGCDGame;
