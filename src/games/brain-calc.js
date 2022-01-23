import mainPartOfGame from '../index.js';

const calculation = (num1, num2, sign) => {
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
const mainQuestion = 'What is the result of the expression?';

const stepOfgame = () => {
  const newNumber1 = getRandomInt();
  const newNumber2 = getRandomInt();
  const newSign = getRandomSign();
  const rightAnswer = String(calculation(newNumber1, newNumber2, newSign));
  const question = `${newNumber1} ${newSign} ${newNumber2}`;
  return [rightAnswer, question];
};
export default () => mainPartOfGame(mainQuestion, stepOfgame);
