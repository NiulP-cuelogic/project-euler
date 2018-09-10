let start = new Date().getTime();
function generateFiboSequence(number) {
  let sum = 0;
  let first  = 1;
      second = 2;
  let fiboArray = [];
  while ( first < number) {
      sum = first + second;
      if (Math.trunc(first%2 === 0)) {
          fiboArray.push(first);
      }
      first = second;
      second  = sum;
  }
  return fiboArray;
}

function getArraySum(arr) {
      let total = 0;
      arr.forEach((element) => {
          total = total+element;
      })
      return total;
}
console.log(getArraySum(generateFiboSequence(4000000)));
let end = new Date().getTime();
console.log((end-start)/1000);
