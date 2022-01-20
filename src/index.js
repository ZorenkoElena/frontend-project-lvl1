import readlineSync from 'readline-sync';

const name = () => {
  const text = readlineSync.question('May I have your name? ');
  return text === '' ? 'new player' : text;
};

const answerOnQuestion = () => readlineSync.question('Your answer: ');

const expression = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const getRandomInt = () => Math.floor(Math.random() * 10);
const getRandomSign = () => {
  const number = Math.random();
  if (number < 0.33) return '+';
  if (number < 0.66) return '-';
  return '*';
};

export {
  name, answerOnQuestion, expression, getRandomInt, getRandomSign,
};
