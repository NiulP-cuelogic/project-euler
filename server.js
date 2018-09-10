let start = new Date().getTime();
function getArraySum(arr) {
      let total = 0;
      arr.forEach((element) => {
          total = total+element;
      })
      return total;
}

let k = 999;
let tempArray = [];
while(k>=1) {
    if(Math.trunc(k%3) === 0 || Math.trunc(k%5) === 0) {
      tempArray.push(k);
    }
    k--;
}
let result = (getArraySum(tempArray));
console.log(result);
let end = new Date().getTime();
console.log((end-start)/1000);
