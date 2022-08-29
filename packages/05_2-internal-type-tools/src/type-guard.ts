// input is string: keyword "is"
function isString(input: unknown): input is string {
  return typeof input === 'string'
}

function foo(input: string | number) {
  if (isString(input)) {
    input.replace('typescript', 'apple')
  }
  if (typeof input === 'number') {
    console.log(input)
  }
}

export type Falsy = false | '' | 0 | null | undefined
export const isFalsy = (val: unknown): val is Falsy => !val

export type Primitive = string | number | boolean | undefined
export const isPrimitive = (val: unknown): val is Primitive =>
  ['string', 'number', 'boolean', 'undefined'].includes(typeof val)

export {}
