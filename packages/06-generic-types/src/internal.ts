function p() {
  return new Promise<boolean>((resolve, reject) => {
    resolve(true)
  })
}

interface PromiseConstructor {
  resolve<T>(value: T | PromiseLike<T>): Promise<T>
}
declare var Promise: PromiseConstructor

const arr: Array<number> = [1, 2, 3]
// arr.push('typescript')
// arr.push(true)
// arr.find(() => false)

arr.reduce((prev, curr, idx, arr) => {
  return prev
}, 1)

// arr.reduce((prev, curr, idx, arr) => {
//   return [...prev, curr]
// }, [])

export {}
