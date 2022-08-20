type Stringfy<T> = {
  [K in keyof T]: string
}

interface Foo {
  prop1: string
  prop2: number
  prop3: boolean
  prop4: () => void
}

type StringfyFoo = Stringfy<Foo>

type Clone<T> = {
  [K in keyof T]: T[K]
}

export {}
