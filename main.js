export function getSum(a) {
    return function(b) {
        return a + b;
    }; 
 };

export function isPrime(num){
    if(isNaN(num) || num < 2 || num > 1000) {
     return "Данные неверны";
    };
    let k = Math.sqrt(num);
    for(let i = 2; i <= k; i++){
      if(num % i === 0){
        return "Непростое число";
      };
    };
    return "Простое число";
  };

export function calcDegree (x, n) {
    return x ** n;
  };