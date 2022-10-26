class Base {
  foo!: number
}

class Foo {
  foo!: number
}

class Bar extends Foo {
  bar!: number
}

let f1: { (input: Foo): void } | { (input: Bar): void }
// f1 = (input) => {}

let f2:
  | { (raw: number): (input: Foo) => void }
  | { (raw: number): (input: Bar) => void }

f2 = (raw) => {
  return (input) => {}
}

let f3: { (input: Foo | Bar): void }
f3 = (input) => {}

export {}
