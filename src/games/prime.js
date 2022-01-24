import mainPartOfGame from '../index.js';
import getRandomInt from '../calculations.js';

const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 2) return 'yes';
  if (num < 2 || num % 2 === 0) return 'no';
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};
const stepOfgame = () => {
  const newNumber = getRandomInt(1, 100);
  const rightAnswer = isPrime(newNumber);

  const question = `${newNumber}`;
  return [rightAnswer, question];
};
export default () => mainPartOfGame(mainQuestion, stepOfgame);
