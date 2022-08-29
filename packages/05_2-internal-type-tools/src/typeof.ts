const str = 'typescript'
const num = 12
const bool = true
const nul = null
const undef = undefined
const obj = { name: 'typescript' }
const func = (str: string) => {
  return str.length
}

type Str = typeof str
type Num = typeof num
type Undef = typeof undef
type Nul = typeof nul
type Obj = typeof obj
type Func = typeof func

type FuncReturnType = ReturnType<typeof func>

const isInputValid = (input: string) => {
  return input.length > 10
}

// let isValid: typeof isInputValid('typescript')

export {}
