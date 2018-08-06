// Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

//const summation = num => num ? [...Array(num)].map((e, i) => i + 1).reduce((acc, curr) => acc + curr) : 0;
const summation = num => {
  let counter = 0;
  for (let i = 0; i <= num; i++) {
    counter+=i;
  }
  return counter;
}