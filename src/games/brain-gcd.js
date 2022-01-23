import mainPartOfGame from '../index.js';

const getRandomInt = () => Math.floor(Math.random() * 10);
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const mainQuestion = 'Find the greatest common divisor of given numbers.';

const stepOfgame = () => {
  const newNumber1 = getRandomInt();
  const newNumber2 = getRandomInt();
  const rightAnswer = String(gcd(newNumber1, newNumber2));
  const question = `${newNumber1} ${newNumber2}`;
  return [rightAnswer, question];
};
export default () => mainPartOfGame(mainQuestion, stepOfgame);
