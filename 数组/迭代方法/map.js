// 对数组每一项都运行传入的函数，
// 返回由每次函数调用的结果构成的数组

let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let mapResult = numbers.map((item, index, array) => item * 2);
console.log(mapResult) // 2,4,6,8,10,8,6,4,2