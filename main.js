//task 1
const numbers = [];
for (let i = 10; i <= 20; i++) {
  numbers.push(i);
}
console.log(`числа від 10 до 20: ${numbers.join()}`);

//task 2
const squares = [];
for (let i = 10; i <= 20; i++) {
  squares.push(i ** 2);
}
console.log(`Квадрати чисел від 10 до 20: ${squares}`);

//task 3
const multNumber = 7;
console.log(`Таблиця множення на 7:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${i} * ${multNumber} = ${i * multNumber}`);
}

//task 4
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(`суму всіх цілих чисел від 1 до 15: ${sum}`);

//task 5
let prod = 1;
for (let i = 15; i <= 35; i++) {
  prod *= i;
}
console.log(`добуток усіх цілих чисел від 15 до 35: ${prod}`);

//task 6
const number = 500;
let avg = 0;
for (let i = 1; i <= number; i++) {
  avg += i;
}
console.log(
  `середнє арифметичне всіх цілих чисел від 1 до 500: ${avg / number}`
);

//task 7
let sum2 = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) sum2 += i;
}
console.log(`сума лише парних чисел в діапазоні від 30 до 80: ${sum2}`);

//task 8
const numbers2 = [];
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) numbers2.push(i);
}
console.log(`всі числа в діапазоні від 100 до 200 кратні 3: ${numbers2}`);

//task 9
const n = 10;
const divisors = [];
for (let i = 1; i <= n; i++) {
  if (n % i === 0) divisors.push(i);
}
console.log(`Дільники числа ${n}: ${divisors}`);

//task 10
const amount = [];
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    if (i % 2 === 0) amount.push(i);
  }
}
console.log(
  `Кількість парних дільників числа: ${n}: ${amount.length}, це числа: ${amount}`
);

//task 11
let sum3 = 0;
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    if (i % 2 === 0) sum3 += i;
  }
}
console.log(`Cума парних дільників числа ${n}: ${sum3}`);

//task 12
console.log('Повна таблиця множення від 1 до 10');
for (let i = 1; i <= 10; i++) {
    console.log(`Таблиця множення на ${i}`)
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`)
  }
}
