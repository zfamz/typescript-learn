type Record<K extends keyof any, T> = {
  [P in K]: T
}

type Record1 = Record<string, unknown>
type Record2 = Record<number, string>
type Record3 = Record<number | string, any>

type Dictionary<T> = {
  [index: string]: T
}

type NumbericDictionary<T> = {
  [x: number]: T
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

type JobUnionType = 'A' | 'B'

interface Foo {
  name: string
  age: number
  job: JobUnionType
}

type Tmp = Omit<Foo, 'name'>

type Tmp1 = Exclude<1, 2>
type Tmp2 = Exclude<1 | 2, 2>
type Tmp3 = Exclude<1 | 2 | 3, 2 | 3>
type Tmp4 = Exclude<1 | 2 | 3, 2 | 4>

export {}
