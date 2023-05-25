import readlineSync from 'readline-sync';

export const numOfRounds = 3;

const runGame = (rounds, description) => {
  console.log('Welcome to Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < numOfRounds; i += 1) {
    const [question, correctAnswer] = rounds[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
