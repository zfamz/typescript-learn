let unknownVar: unknown = 'typescript'

unknownVar = 12
unknownVar = false
unknownVar = { name: 'typescript' }
unknownVar = () => {}

// const val1: string = unknownVar
// const val2: number = unknownVar
// const val3: {} = unknownVar

const val4: any = unknownVar
const val5: unknown = unknownVar

export {}
