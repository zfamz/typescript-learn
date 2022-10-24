type PromiseValue<T> = T extends Promise<infer V> ? V : T
type PromiseValueR1 = PromiseValue<Promise<number>>
type PromiseValueR2 = PromiseValue<number>

type PromiseValue1<T> = T extends Promise<infer V>
  ? V extends Promise<infer N>
    ? N
    : V
  : T

type PromiseValue2<T> = T extends Promise<infer V> ? PromiseValue3<V> : T
type PromiseValueR3 = PromiseValue<Promise<Promise<boolean>>>
type PromiseValueR4 = PromiseValue1<Promise<Promise<boolean>>>
type PromiseValueR5 = PromiseValue2<Promise<Promise<boolean>>>

export {}
