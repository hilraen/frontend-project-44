import getRandomInt from '../utils.js';
import runGame, { numOfRounds } from '../coreLogic.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperatorInd = getRandomInt(0, operators.length - 1);
  return operators[randomOperatorInd];
};

const calculation = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return Error('Operator not found');
  }
};

const makeRound = () => {
  const operator = getRandomOperator();
  const num1 = getRandomInt(0, 50);
  const num2 = getRandomInt(0, 50);
  const correctAnswer = String(calculation(operator, num1, num2));
  const question = `${num1} ${operator} ${num2}`;
  return [question, correctAnswer];
};

const runCalcGame = () => {
  const rounds = [];
  for (let i = 0; i < numOfRounds; i += 1) {
    rounds[i] = makeRound();
  }
  return runGame(rounds, description);
};

export default runCalcGame;