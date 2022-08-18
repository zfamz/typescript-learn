function func(name: string): number {
  return name.length
}

const foo: (name: string) => number = function (name: string): number {
  return name.length
}

type FuncFoo = (name: string) => number
interface FuncFooStruct {
  (name: string): number
}

const foo2: FuncFoo = func
const foo3: FuncFooStruct = func

function foo4(): void {}
function foo5(): undefined {
  return
}

// rest args
function foo6(name: string, age?: number): number {
  const inputAge = age || 10
  return name.length + inputAge
}
function foo7(name: string, age: number = 10): number {
  return name.length + age
}
function foo8(arg1: string, ...rest: any[]) {}
function foo9(arg1: string, ...rest: [number, string]) {}

// overload
function func1(foo: number, bar: true): string
function func1(foo: number, bar?: false): number
function func1(foo: number, bar?: boolean): string | number {
  if (bar) {
    return foo.toString()
  } else {
    return foo * 3
  }
}
let res1 = func1(12)

// async
async function asyncFunc(): Promise<void> {}
function* genFunc(): Iterable<void> {}
async function* asyncGenFunc(): AsyncIterable<void> {}

export {}
