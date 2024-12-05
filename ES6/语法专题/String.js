let a = String({ a: 1 })
console.log(a);

let arr = [1, 2, 3, 4]
Array.prototype.toString = function () {
  return '[object Array]'
}

console.log(String(arr));

