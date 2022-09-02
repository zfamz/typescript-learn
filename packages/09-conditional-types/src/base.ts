type LiteralType<T> = T extends string ? 'string' : 'other'

type Res1 = LiteralType<'str'>
type Res2 = LiteralType<12>

export type _LiteralType<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends null
  ? 'null'
  : T extends undefined
  ? 'undefined'
  : T extends void
  ? 'void'
  : never

type Res3 = _LiteralType<void>
type Res4 = _LiteralType<{}>
type Res5 = _LiteralType<12>

function _universalAdd<T extends number | bigint | string>(x: T, y: T) {
  return x + (y as any)
}

export type LiteralToPrimitive<T> = T extends number
  ? number
  : T extends bigint
  ? bigint
  : T extends string
  ? string
  : never

function universalAdd<T extends number | bigint | string>(
  x: T,
  y: T
): LiteralToPrimitive<T> {
  return x + (y as any)
}

universalAdd(12, 1)
universalAdd('types', 'script')

// --- function
type Func = (...args: any[]) => any

type FunctionConditionType<T extends Func> = T extends (
  ...args: any[]
) => string
  ? 'A string return func!'
  : 'A non-string return func!'

type StringResult = FunctionConditionType<() => 'typescript'>
type NonStringResult = FunctionConditionType<() => void>
type NonStringResult2 = FunctionConditionType<() => 12>
