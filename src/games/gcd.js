import mainPartOfGame from '../index.js';
import getRandomInt from '../calculations.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const mainQuestion = 'Find the greatest common divisor of given numbers.';

const stepOfgame = () => {
  const newNumber1 = getRandomInt(1, 10);
  const newNumber2 = getRandomInt(1, 10);
  const rightAnswer = String(gcd(newNumber1, newNumber2));
  const question = `${newNumber1} ${newNumber2}`;
  return [rightAnswer, question];
};
export default () => mainPartOfGame(mainQuestion, stepOfgame);
