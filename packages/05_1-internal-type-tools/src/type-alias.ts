type StatusCode = 200 | 301 | 400 | 500 | 502
type PossibleDataTypes = string | number | (() => unknown)

const status: StatusCode = 200

type Handler = (e: Event) => void
const clickHandler: Handler = (e) => {}
const moveHandler: Handler = (e) => {}
const dragHanlder: Handler = (e) => {}

type ObjType = {
  name: string
  age: number
}

// type Factory<T> = T | string | number
type Factory<NewType> = NewType | string | number
const foo: Factory<boolean> = true

type FactoryWithBool = Factory<boolean>
const foo1: FactoryWithBool = true

type MaybeNull<T> = T | null
type MaybeArray<T> = T | T[]

function procss(input: MaybeNull<{ handler: () => {} }>) {
  input?.handler()
}
function ensureArray<T>(input: MaybeArray<T>) {
  return Array.isArray(input) ? input : [input]
}

export {}
