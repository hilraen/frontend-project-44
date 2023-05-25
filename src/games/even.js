import getRandomInt from '../utils.js';
import runGame, { numOfRounds } from '../coreLogic.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkIfNumIsEven = (num) => num % 2 === 0;

const makeRound = () => {
  const question = getRandomInt(1, 20);
  const correctAnswer = checkIfNumIsEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => {
  const rounds = [];
  for (let i = 0; i < numOfRounds; i += 1) {
    rounds[i] = makeRound();
  }
  return runGame(rounds, description);
};

export default runEvenGame;
