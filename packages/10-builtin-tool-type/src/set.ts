type Extract<T, U> = T extends U ? T : never

type Exclude<T, U> = T extends U ? never : T

type AExtractB = Extract<1 | 2 | 3, 1 | 2 | 4>

type _AExtractB =
  | (1 extends 1 | 2 | 4 ? 1 : never)
  | (2 extends 1 | 2 | 4 ? 2 : never)
  | (3 extends 1 | 2 | 4 ? 3 : never)

type SetA = 1 | 2 | 3 | 5
type SetB = 0 | 1 | 2 | 4

type AExcludeB = Exclude<SetA, SetB>
type BExcludeA = Exclude<SetB, SetA>

// 并集
export type Concurrence<A, B> = A | B
// 交集
export type Intersection<A, B> = A extends B ? A : never
// 差集
export type Difference<A, B> = A extends B ? never : A
// 补集
export type Complement<A, B extends A> = Difference<A, B>

type NonNullable<T> = T extends null | undefined ? never : T
type _NonNullable<T> = Difference<T, null | undefined>

type Tmp = Difference<SetB, SetA>

export {}
