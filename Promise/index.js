const foo = () => {
  return new Promise((resolve, reject) => {
    resolve('foo')
  })
}


(async () => {
  const res = await foo();
  console.log(typeof res);
  console.log(res);
})()


foo().then(res => {
  console.log(typeof res);
})


console.log(111);