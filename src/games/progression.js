import mainPartOfGame from '../index.js';
import getRandomInt from '../calculations.js';

const mainQuestion = 'What number is missing in the progression?';
const lengthOfProgression = getRandomInt(6, 12);

const stepOfgame = () => {
  const startOfProgression = getRandomInt(1, 20);
  const differenceOfProgression = getRandomInt(2, 5);
  const indexOfAsking = getRandomInt(0, (lengthOfProgression - 1));
  const newProgression = [];
  let a = startOfProgression;
  for (let i = 0; i < lengthOfProgression; i += 1) {
    newProgression.push(a);
    a += differenceOfProgression;
  }
  const rightAnswer = String(newProgression[indexOfAsking]);
  newProgression[indexOfAsking] = '..';
  const question = newProgression.join(' ');
  return [rightAnswer, question];
};
export default () => mainPartOfGame(mainQuestion, stepOfgame);
