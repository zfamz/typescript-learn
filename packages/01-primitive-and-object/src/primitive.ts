const name: string = 'TypeScript'
const number: number = 12
const male: boolean = true
const undef: undefined = undefined
const nul: null = null
const obj: object = { name, number, male }
const bigintVar1: bigint = 100n
const bigintVar2: bigint = BigInt(100)
const symbolVar: symbol = Symbol('unique')

const tmp1: null = null
const tmp2: undefined = undefined

// "strictNullChecks": false
const tmp3: string = null
const tmp4: string = undefined
