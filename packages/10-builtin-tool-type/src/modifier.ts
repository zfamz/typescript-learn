import { read } from 'fs'

type Partial<T> = {
  [P in keyof T]?: T[P]
}

type _Partial<T> = {
  [P in keyof T]+?: T[P]
}

type Required<T> = {
  [P in keyof T]-?: T[P]
}

type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

type _Readonly<T> = {
  +readonly [P in keyof T]: T[P]
}

type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

export {}
