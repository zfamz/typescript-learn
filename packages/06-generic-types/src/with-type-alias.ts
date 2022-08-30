type Factory<T> = T | number | string

type Stringify<T> = {
  [K in keyof T]: string
}

type Clone<T> = {
  [K in keyof T]: T[K]
}

type _Partial<T> = {
  [P in keyof T]?: T[P]
}

interface IFoo {
  prop1: string
  prop2: number
  prop3: boolean
  prop4: () => void
}

type PartivalIFoo = Partial<IFoo>
type _PartivalIFoo = _Partial<IFoo>

// ---
type IsEqual<T> = T extends true ? 1 : 2

type A = IsEqual<true>
type B = IsEqual<false>
type C = IsEqual<'typescript'>

export {}
