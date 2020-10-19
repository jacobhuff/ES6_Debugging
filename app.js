let num1 = 3;
let num2 = 4;
function sum(num1, num2) {
  return num1 + num2;
}
function difference(num1, num2) {
  return num1 - num2;
}
function mulitply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
console.log(sum(num1, num2));
console.log(difference(num1, num2));
console.log(mulitply(num1, num2));
console.log(divide(num1, num2));

arrowSum = (num1, num2) => {
  return num1 + num2;
}
arrowDifference = (num1, num2) => {
  return num1 - num2;
}
arrowMulitply = (num1, num2) => {
  return num1 * num2;
}
arrowDivide = (num1, num2) => {
  return num1 / num2;
}