#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = () => Math.floor(Math.random() * 100);
const evenRandomInt = (number) => {
  if (number % 2 == 0) return 'yes';
  return 'no'
};

console.log('Welcome to the Brain Games!');
const name = () => {
  const text = readlineSync.question('May I have your name? ');
  return text === '' ? 'new player' : text;
};
const correctName = name();
console.log(`Hello, ${correctName}!`);
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

const checkNumber = () => {
  let flag = true;
  let i = 1;
  while (i < 4 && flag) {

    let newNumber = getRandomInt();
    let even = evenRandomInt(newNumber);

    console.log(`Question: ${newNumber}`);
    let answer = readlineSync.question('Your answer: ');

    if (answer === even) {
      console.log(`Correct!`);
      i += 1;
    } else {
      console.log(`"${answer}"  is wrong answer ;(. Correct answer was "${even}". Let's try again, ${correctName}!`);
      flag = false;
    }
  }
  if (i === 4) {
    console.log(`Congratulations, ${correctName}!`);
  };
};
checkNumber();