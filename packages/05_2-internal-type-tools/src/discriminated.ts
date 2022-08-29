interface Foo {
  kind: 'foo'
  diffType: string
  foo: string
  fooOnly: boolean
  shared: number
}

interface Bar {
  kind: 'bar'
  diffType: number
  bar: string
  barOnly: boolean
  shared: number
}

function handle(input: Foo | Bar) {
  // if ('shared' in input) {
  if ('foo' in input) {
    input.fooOnly
  } else {
    input.barOnly
  }
}

function ensureArray(input: number | number[]): number[] {
  if (Array.isArray(input)) {
    return input
  } else {
    return [input]
  }
}

function handle1(input: Foo | Bar) {
  if (input.kind === 'foo') {
    input.fooOnly
  } else {
    input.barOnly
  }
}

// error
// function handle2(input: Foo | Bar) {
//   if (typeof input.diffType === 'string') {
//     input.fooOnly
//   } else {
//     input.barOnly
//   }
// }

export {}
