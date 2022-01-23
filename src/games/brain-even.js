import mainPartOfGame from '../index.js';

const getRandomInt = () => Math.floor(Math.random() * 100);
const calculation = (number) => {
  if (number % 2 === 0) return 'yes';
  return 'no';
};
const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const stepOfgame = () => {
  const newNumber = getRandomInt();
  const rightAnswer = calculation(newNumber);

  const question = `${newNumber}`;
  return [rightAnswer, question];
};
export default () => mainPartOfGame(mainQuestion, stepOfgame);
