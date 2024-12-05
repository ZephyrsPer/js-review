class MyPromise {
  constructor(exe) {
    exe(this.resolve)
  }

  resolve(value) {
    console.log(this);
    console.log(value)
  }
}

const p = new MyPromise((resolve) => {
  resolve('hello')
})