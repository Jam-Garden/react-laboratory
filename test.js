let functionCall = 0;

// memoization
const fib = (n, memo = {}) => {
  if(n in memo) return memo[n]
  if (n <= 1) return 1;
  functionCall++;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n]
};

console.log(fib(10));
console.log(functionCall);
