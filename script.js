const n = 100; // put any natural number n > 1, 100 is placeholder

// first loop for evaluating every natural from 2 up to n
// second loop to divide every natural by numbers from 2 up to n

for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && i / j === 1) {
      console.log(`${i} is prime number`);
    }
    if (i % j === 0 && i / j > 1) {
      break;
    }
  }
}
