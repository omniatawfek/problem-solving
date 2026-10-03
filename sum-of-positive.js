// You get an array of numbers, return the sum of all of the positives ones.

// function positiveSum(arr) {
//   sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) sum += arr[i];
//   }
//   return sum;
// }

function positiveSum(arr) {
  return arr.filter((num) => num > 0).reduce((acc, curr) => acc + curr, 0);
}
