import { expectType } from 'tsd'

export type DeepPartial<T extends object> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

type DeepPartialStruct = DeepPartial<{
  foo: string
  func: (name: string) => void
  nested: {
    nestNum: number
    nFoo: string
    nBar: { nBarFoo: string }
  }
}>

expectType<DeepPartialStruct>({
  nested: {},
})

expectType<DeepPartialStruct>({
  foo: 'typescript',
  nested: {
    nestNum: undefined,
    nBar: {
      nBarFoo: 'str',
    },
  },
})

export type DeepRequied<T extends object> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequied<T[K]> : T[K]
}

export type DeepReadonly<T extends object> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}

export type DeepMutable<T extends object> = {
  -readonly [K in keyof T]: T[K] extends object ? DeepMutable<T[K]> : T[K]
}

type NonNullable<T> = T extends null | undefined ? never : T

export type DeepNonNullable<T extends object> = {
  [K in keyof T]: T[K] extends object
    ? DeepNonNullable<T[K]>
    : NonNullable<T[K]>
}

export type Nullable<T> = T | null

export type DeepNullable<T extends object> = {
  [K in keyof T]: T[K] extends object ? DeepNullable<T[K]> : Nullable<T[K]>
}
