import { assert } from 'console'

let unknownVar: unknown
;(unknownVar as { foo: () => {} }).foo()

const str: string = 'typescript'
;(str as any).func().foo().prop

function func(union: string | number) {
  if ((union as string).includes('ts')) {
    console.log('string')
  }
  if ((union as number).toFixed() === '12') {
    console.log('number')
  }
}

interface IFoo {
  name: string
}
declare const obj: {
  foo: IFoo
}
const { foo = {} as IFoo } = obj

// double assert
// ;(str as { handler: () => {} }).handler()
;(str as unknown as { handler: () => {} }).handler()
;(<{ handler: () => {} }>(<unknown>str)).handler()

// non null
declare const bar: {
  func?: () => { prop?: number | null }
}
bar.func!().prop!.toFixed()
bar.func?.().prop?.toFixed()

// tips
interface IStruct {
  foo: string
  bar: {
    str: string
    num: number
    func: () => void
    baz: {
      handler: () => Promise<void>
    }
  }
}
// const _obj: IStruct = {}
const _obj = <IStruct>{ bar: { baz: {} } }

export {}
