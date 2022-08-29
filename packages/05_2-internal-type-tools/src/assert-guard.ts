import assert from 'assert'
let name: any = 'typescript'

// assert(typeof name === 'number')
// name.toFixed()

function _assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg)
  }
}

function assertIsNumber(val: any): asserts val is number {
  if (typeof val !== 'number') {
    throw new Error('Not a number!')
  }
}

assertIsNumber(name)
name.toFixed()
