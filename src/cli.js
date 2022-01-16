import readlineSync from 'readline-sync';

export default () => {
  const text = readlineSync.question('May I have your name? ');
  const name = (text === '') ? 'new player' : text;
  console.log(`Hello, ${name}!`);
};