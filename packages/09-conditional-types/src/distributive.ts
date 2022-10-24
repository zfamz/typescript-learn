type Condition<T> = T extends 1 | 2 | 3 ? T : never

type Res1 = Condition<1 | 2 | 3 | 4 | 5>
type Res2 = 1 | 2 | 3 | 4 | 5 extends 1 | 2 | 3 ? 1 | 2 | 3 | 4 | 5 : never

type Naked<T> = T extends boolean ? 'Y' : 'N'
type Wrapped<T> = T extends [boolean] ? 'Y' : 'N'
type Res3 = Naked<number | boolean>
type Res4 = Wrapped<number | boolean>

// ---
export type NoDistribute<T> = T & {}
type Wrapped1<T> = NoDistribute<T> extends boolean ? 'Y' : 'N'
type Res5 = Wrapped1<number | boolean>
type Res6 = Wrapped1<false | true>
type Res7 = Wrapped1<false | true | 24>

// ---
type CompareUnion<T, U> = [T] extends [U] ? true : false
type CompareRes1 = CompareUnion<1 | 2, 1 | 2 | 3>
type CompareRes2 = CompareUnion<1 | 2, 1>

// ---
type IsNever<T> = [T] extends [never] ? true : false
type IsNeverRes1 = IsNever<never>
type IsNeverRes2 = IsNever<number>

// ---
type Tmp1 = any extends string ? 1 : 2
type Tmp2<T> = T extends string ? 1 : 2
type Tmp2Res1 = Tmp2<any>

type Special1 = any extends any ? 1 : 2
type Special2<T> = T extends any ? 1 : 2
type Special2Res = Special2<any>

type Tmp3 = never extends string ? 1 : 2
type Tmp4<T> = T extends string ? 1 : 2
type Tmp4Res = Tmp4<never>

type Special3 = never extends never ? 1 : 2
type Special4<T> = T extends never ? 1 : 2
type Special4Res = Special4<never>

// ---
type Intersection<A, B> = A extends B ? A : never
type IntersectionRes = Intersection<1 | 2 | 3, 2 | 3 | 4>
