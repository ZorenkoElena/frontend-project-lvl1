import readlineSync from 'readline-sync';

// Колличество раундов
const numberOfRounds = 3;

const name = () => {
  const text = readlineSync.question('May I have your name? ');
  return text === '' ? 'new player' : text;
};

const mainPartOfGame = (mainQuestion, stepOfgame) => {
  console.log('Welcome to the Brain Games!');
  const correctName = name();
  console.log(`Hello, ${correctName}!`);
  console.log(`${mainQuestion}`);

  let flag = true;
  let i = 1;
  while (i < (numberOfRounds + 1) && flag) {
    const [rightAnswer, expression] = stepOfgame();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    flag = false;
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      if (i === numberOfRounds) {
        console.log(`Congratulations, ${correctName}!`);
      }
      if (i < numberOfRounds) {
        flag = true;
        i += 1;
      }
    } else { console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${correctName}!`); }
  }
};
export default mainPartOfGame;
