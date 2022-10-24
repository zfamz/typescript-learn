type Func = (...args: any[]) => any

type FunctionReturnType<T extends Func> = T extends (...args: any[]) => infer R
  ? R
  : never

type Swap<T extends any[]> = T extends [infer A, infer B] ? [B, A] : T

type SwapR1 = Swap<[1, 2]>
type SwapR2 = Swap<[1, 'script']>
type SwapR3 = Swap<[1, 2, 3]>

type ExtractStartAndEnd<T extends any[]> = T extends [
  infer Start,
  ...any[],
  infer End
]
  ? [Start, End]
  : T
type SwapR4 = ExtractStartAndEnd<[1, 2, 3]>

type SwapStartAndEnd<T extends any[]> = T extends [
  infer Start,
  ...infer Left,
  infer End
]
  ? [End, ...Left, Start]
  : T
type SwapR5 = SwapStartAndEnd<[1, 2, 3]>

type SwapFirstTwo<T extends any[]> = T extends [
  infer Start1,
  infer Start2,
  ...infer Left
]
  ? [Start2, Start1, ...Left]
  : T

type SwapR6 = SwapFirstTwo<['1', 2, 3]>

type ArrayItemType<T> = T extends Array<infer ElementType> ? ElementType : never
// type ArrayItemType<T> = T extends Array<infer Item> ? Item : never
type ArrayItemTypeR1 = ArrayItemType<[]>
type ArrayItemTypeR2 = ArrayItemType<string[]>
type ArrayItemTypeR3 = ArrayItemType<[string, number]>

type PropType<T, K extends keyof T> = T extends { [key in K]: infer R }
  ? R
  : never
type PropTypeR1 = PropType<{ name: 'typescript' }, 'name'>
type PropTypeR2 = PropType<{ name: string; age: number }, 'name' | 'age'>

type ReverseKeyValue<T extends Record<string, unknown>> = T extends Record<
  infer K,
  infer V
>
  ? Record<V & string, K>
  : never
type ReverseKVR1 = ReverseKeyValue<{ name: string; age: number }>
type ReverseKVR2 = ReverseKeyValue<{ key: 'value' }>

export {}
