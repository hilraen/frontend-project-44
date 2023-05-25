import getRandomInt from '../utils.js';
import runGame, { numOfRounds } from '../coreLogic.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIfNumIsPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const makeRound = () => {
  const question = getRandomInt(0, 20);
  const correctAnswer = checkIfNumIsPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  const rounds = [];
  for (let i = 0; i < numOfRounds; i += 1) {
    rounds[i] = makeRound();
  }
  return runGame(rounds, description);
};

export default runPrimeGame;
