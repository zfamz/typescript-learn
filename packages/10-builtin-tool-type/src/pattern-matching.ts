type FunctionType = (...args: any) => any

type Parameters<T extends FunctionType> = T extends (...args: infer P) => any
  ? P
  : never

type ReturnType<T extends FunctionType> = T extends (...args: any) => infer P
  ? P
  : never

type FirstParameter<T extends FunctionType> = T extends (
  arg: infer P,
  ...args: any
) => any
  ? P
  : never

type Tmp = Parameters<(name: boolean, ...args: number[]) => string>

//  ---
type ClassType = abstract new (...args: any) => any
interface _ClassType<TInstanceType = any> {
  new (...args: any[]): TInstanceType
}

type ConstructorParameter<T extends ClassType> = T extends abstract new (
  ...args: infer P
) => any
  ? P
  : never

type InstanceType<T extends ClassType> = T extends abstract new (
  ...args: any
) => infer P
  ? P
  : never

export {}
