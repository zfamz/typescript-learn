type Result7 = 1 extends 1 | 2 | 3 ? 1 : 2
type Result8 = 'script' extends 'type' | 'script' | 'apple' ? 1 : 2
type Result9 = true extends true | false ? 1 : 2

type Result10 = string extends string | false | number ? 1 : 2

type Result11 = 'type' | 'script' extends string ? 1 : 2
type Result12 = {} | [] | (() => void) extends object ? 1 : 2

type Result13 = 'type' extends 'type' | 'script'
  ? 'type' | 'script' extends string
    ? 2
    : 1
  : 0

export {}
