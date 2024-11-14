// 闭包让你可以在一个内层函数中访问到其外层函数的作用域

// 使用场景
// 1. 创建私有变量

// 2. 延长变量的生命周期

let counter = (function () {
  let n = 0;
  return function () {
    return ++n;
  };
})();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());