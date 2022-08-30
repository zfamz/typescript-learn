type Factory<T = boolean> = T | number | string

const foo: Factory = 'true'

type ResStatus<ResCode extends number = 10000> = ResCode extends 10000 | 10001 | 10002 ? 'success' : 'failure'

type res1 = ResStatus
type res2 = ResStatus<1000>
type res3 = ResStatus<10000>
// type res4 = ResStatus<'typescript'>

export {}
