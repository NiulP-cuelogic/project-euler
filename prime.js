function getFactors(number) {
    let i = 1;
    let factorArray = [];
    while (i <= number ){
      if (Math.trunc(number) % i === 0) {
        factorArray.push(i);
      }
      i++;
    }
    return factorArray;
}


let numArray = getFactors(600851475143);

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);
