interface IDescription {
  name: string
  age: number
  male?: boolean
  func?: Function
}

const obj1: IDescription = {
  name: 'Typescript',
  age: 12,
  male: true,
}

// type _type = typeof obj1.male

interface IDescription2 {
  readonly name: string
  age: number
}

const obj2: IDescription2 = {
  name: 'Typescript',
  age: 12,
}

// obj2.name = 'typescript'
