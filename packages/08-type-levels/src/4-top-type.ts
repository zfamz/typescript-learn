type Result22 = Object extends any ? 1 : 2
type Result23 = Object extends unknown ? 1 : 2

type Result24 = any extends Object ? 1 : 2 // 1 | 2
type Result24_ = any extends Object ? 3 : 4 // 3 | 4
type Result25 = unknown extends Object ? 1 : 2

type Result26 = any extends 'typescript' ? 1 : 2
type Result27 = any extends string ? 1 : 2
type Result28 = any extends {} ? 1 : 2
type Result29 = any extends never ? 1 : 2

// 必须使用3元判断符？？？
// type Result30 = any extends {}

type Result30 = "I'm stirng" | {} extends string ? 1 : 2

type Result31 = any extends unknown ? 1 : 2
type Result32 = unknown extends any ? 1 : 2

export {}
