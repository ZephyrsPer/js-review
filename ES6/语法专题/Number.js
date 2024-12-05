
let obj = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return {};
  }
}

/* 
TypeError: Cannot convert object to primitive value
    at Object.<anonymous> (c:\Users\AAA\Desktop\拷打面试官\ES6\语法专题\Number.js:11:17)
    at Module._compile (node:internal/modules/cjs/loader:1364:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
    at Module.load (node:internal/modules/cjs/loader:1203:32)
    at Module._load (node:internal/modules/cjs/loader:1019:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49
*/

// console.log(obj + 1);


let o = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 2;
  }
}

console.log(o + 1);