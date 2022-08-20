// 索引类型： 索引签名类型， 索引类型查询， 索引类型访问

interface AllStringTypes {
  [key: string]: string
}

type AllStringTypes1 = {
  [key: string]: string
}

type PropType1 = AllStringTypes['name']
type PropType2 = AllStringTypes[599] // 599 equal to '599'

const foo: AllStringTypes = {
  string: 'str',
  12: 'index',
  [Symbol('s')]: 'symbol',
}

interface StringOrBooleanTypes {
  propA: number
  propB: boolean
  [key: string]: number | boolean
}

interface AnyTypeHere {
  [key: string]: any
}

const foo1: AnyTypeHere['typescript'] = 'typescript' // any

// -- --
interface Foo {
  name: 1
  12: 2
}

type FooKeys = keyof Foo // 'name' | 12

// -- --
interface NumberRecord {
  [key: string]: number
}

type PropType = NumberRecord[string] // number

interface Foo1 {
  propA: number
  propB: boolean
}

type PropAType = Foo1['propA']
type Foo1Keys = keyof Foo1
type Foo1TypeUnion = Foo1[keyof Foo1]
// type Foo1Str = Foo1[string]  // not match string index

export {}
