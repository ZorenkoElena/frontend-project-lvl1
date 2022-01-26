import mainPartOfGame from '../index.js';
import getRandomInt from '../calculations.js';

const isEven = (number) => {
  if (number % 2 === 0) return 'yes';
  return 'no';
};
const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const stepOfgame = () => {
  const question = getRandomInt(1, 100);
  const rightAnswer = isEven(question);
  return [rightAnswer, question];
};
export default () => mainPartOfGame(mainQuestion, stepOfgame);
