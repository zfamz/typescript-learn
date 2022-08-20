interface NameStruct {
  name: string
}

interface AgeStruct {
  age: number
}

type ProfileStruct = NameStruct & AgeStruct
const profile: ProfileStruct = {
  name: 'typescript',
  age: 12,
}

type StrAndNum = string & number // never

type Struct1 = {
  primitiveProp: string
  objectProp: {
    n: string
    name: string
  }
}

type Struct2 = {
  primitiveProp: number
  objectProp: {
    n: number
    age: number
  }
}

type Composed = Struct1 & Struct2
type PrimitiveProp = Composed['primitiveProp']
type ObjectProp = Composed['objectProp']
type ObjectPropN = Composed['objectProp']['n'] // never

type UnionIntersection1 = (1 | 2 | 3) & (1 | 2 | 4) // 1|2
type UnionIntersection2 = (string | number | symbol) & string // string

export {}
