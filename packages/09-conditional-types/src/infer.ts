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
  ? [End, Start]
  : T
type SwapR5 = SwapStartAndEnd<[1, 2, 3]>
