export type MarkPropsAsOptional<
  T extends object,
  K extends keyof T = keyof T
> = Partial<Pick<T, K>> & Omit<T, K>

type Obj = {
  foo: string
  bar: number
  baz: boolean
}

export type Flatten<T> = { [K in keyof T]: T[K] }

type MarkPropsAsOptionalStruct = Flatten<MarkPropsAsOptional<Obj>>

// type Tmp = Pick<Obj, 'foo'>
