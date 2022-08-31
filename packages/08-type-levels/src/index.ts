// typescript 是 string
// typescript 是 string 的子类
type Result = 'typescript' extends string ? 1 : 2

declare let source: string

declare let anyType: any
declare let neverType: never

anyType = neverType
// neverType = anyType

export {}
