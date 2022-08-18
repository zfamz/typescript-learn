const arr1: string[] = []

const arr2: Array<string> = []

const arr3: string[] = ['a', 'b', 'c']
console.log(arr3[10])

const arr4: [string, number, boolean] = ['a', 1, true]
// console.log(arr4[10])

const arr5: [string, number?, boolean?] = ['a']
console.log(arr5.length) // 1

type TupleLength = typeof arr5.length // 3 | 1 | 2

const arr6: [name: string, age: number, male: boolean] = ['a', 1, true]
// const [i, age, j, o] = arr6
const [i, age, j] = arr6
console.log(i, age, j)
