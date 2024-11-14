// 对数组每一项都运行传入的测试函数，
// 如果至少有1个元素返回 true ，
// 则这个方法返回 true

let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let someResult = numbers.some((item, index, array) => item > 2);
console.log(someResult) // true