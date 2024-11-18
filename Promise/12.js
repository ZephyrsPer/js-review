console.log('同步代码1');

setTimeout(() => {

  console.log('setTimeout')

}, 0)

new Promise((resolve) => {

  console.log('同步代码2')

  resolve()

}).then(() => {

  console.log('promise.then')

})

console.log('同步代码3');

// 最终输出"同步代码1"、"同步代码2"、"同步代码3"、"promise.then"、"setTimeout"

