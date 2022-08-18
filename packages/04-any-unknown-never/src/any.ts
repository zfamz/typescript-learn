let anyVar: any = 'typescript'

anyVar = 12
anyVar = true
anyVar = ['1']
anyVar = { name: 'typescript' }
anyVar = () => {}

const val1: string = anyVar
const val2: number = anyVar
const val3: () => {} = anyVar
const val4: Record<string, unknown> = anyVar
const val5: {} = anyVar

export {}
