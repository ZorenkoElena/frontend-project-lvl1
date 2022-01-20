#!/usr/bin/env node
import {
  name, answerOnQuestion, expression, getRandomInt, getRandomSign,
} from '../src/index.js';

// Колличество раундов
const numberOfRounds = 3;

// Приветствие
console.log('Welcome to the Brain Games!');
const correctName = name();
console.log(`Hello, ${correctName}!`);

// Основные правила:
console.log('What is the result of the expression?');

let flag = true;
let i = 1;
while (i < (numberOfRounds + 1) && flag) {
  const newNumber1 = getRandomInt();
  const newNumber2 = getRandomInt();
  const newSign = getRandomSign();
  const rightAnswer = expression(newNumber1, newNumber2, newSign);
  console.log(`Question: ${newNumber1} ${newSign} ${newNumber2}`);

  const userAnswer = answerOnQuestion();
  const resultOfround = (+userAnswer === rightAnswer);
  flag = false;
  if (resultOfround) {
    if (i === numberOfRounds) {
      console.log(`Congratulations, ${correctName}!`);
    }
    if (i < numberOfRounds) {
      console.log('Correct!');
      flag = true;
      i += 1;
    }
  } else { console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${correctName}!`); }
}
