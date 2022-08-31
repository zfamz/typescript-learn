type Result1 = 'typescript' extends string ? 1 : 2
type Result2 = 1 extends number ? 1 : 2
type Result3 = true extends boolean ? 1 : 2
type Result4 = { name: string } extends object ? 1 : 2
type Result5 = { name: 'typescript' } extends object ? 1 : 2
type Result6 = [] extends object ? 1 : 2

export {}
