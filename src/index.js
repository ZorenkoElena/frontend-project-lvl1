import readlineSync from 'readline-sync';

// Колличество раундов
const numberOfRounds = 3;

const mainPartOfGame = (mainQuestion, stepOfgame) => {
  // Приветствие
  console.log('Welcome to the Brain Games!');
  const name = () => {
    const text = readlineSync.question('May I have your name? ');
    return text === '' ? 'new player' : text;
  };
  const correctName = name();
  console.log(`Hello, ${correctName}!`);

  // Основные правила:
  console.log(`${mainQuestion}`);

  let flag = true;
  let i = 1;
  while (i < (numberOfRounds + 1) && flag) {
    const [rightAnswer, expression] = stepOfgame();
    console.log(`Question: ${expression}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const resultOfround = (userAnswer === rightAnswer);
    flag = false;
    if (resultOfround) {
      if (i === numberOfRounds) {
        console.log('Correct!');
        console.log(`Congratulations, ${correctName}!`);
      }
      if (i < numberOfRounds) {
        console.log('Correct!');
        flag = true;
        i += 1;
      }
    } else { console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${correctName}!`); }
  }
};
export default mainPartOfGame;
