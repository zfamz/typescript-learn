function fn(dog: Dog) {
  dog.bark()
}

type CorgiFunc = (input: Corgi) => void
type AnimalFunc = (input: Animal) => void

const func1: CorgiFunc = fn
// tsconfig "strictFunctionTypes": false
const func2: AnimalFunc = fn

export {}
