type UnionWithNever = 'name' | 12 | true | void | never

declare let v1: never
declare let v2: void

// v1 = v2
v2 = v1

function justThrow(): never {
  throw new Error('just throw')
}

function foo(input: number) {
  if (input > 1) {
    justThrow()
    const name = 'typescript'
  }
}

declare const strOrNumOrBool: string | number | boolean

if (typeof strOrNumOrBool === 'string') {
  strOrNumOrBool.charAt(1)
  console.log('string')
} else if (typeof strOrNumOrBool === 'number') {
  strOrNumOrBool.toFixed()
  console.log('number')
} else if (typeof strOrNumOrBool === 'boolean') {
  strOrNumOrBool === true
  console.log('boolean')
} else {
  const _exhaustiveCheck: never = strOrNumOrBool
  throw new Error('never')
}

export {}
