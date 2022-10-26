type CustomHandler = (name: string, age: number) => void

const handler1: CustomHandler = (name, age) => true
const handler2: CustomHandler = (name, age) => 'typescript'
const handler3: CustomHandler = (name, age) => null
const handler4: CustomHandler = (name, age) => undefined

const r1 = handler1('typescript', 12)
const r2 = handler2('typescript', 12)
const r3 = handler3('typescript', 12)
const r4 = handler4('typescript', 12)

const arr: number[] = []
const list: number[] = [1, 2, 3]

list.forEach((item) => arr.push(item))
list.forEach(() => arr.push())

export {}
