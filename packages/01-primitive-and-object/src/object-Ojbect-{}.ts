const tmp1: Object = 'typescript'
const tmp2: Object = 12
const tmp3: Object = true
const tmp4: Object = { name: 'TypeScript' }
const tmp5: Object = []
const tmp6: Object = () => {}

// "strictNullChecks": false
const tmp7: Object = undefined
const tmp8: Object = void 0
const tmp9: Object = null

// ------------ Boxed Types : String ----------------
const tmp10: String = undefined
const tmp11: String = null
const tmp12: String = void 0
const tmp13: String = 'string'

// error
// const tmp14: String =  10
// const tmp15: String =  []
// const tmp16: String =  {}
// const tmp17: String =  () => {}

// ------------ object ----------------
// const tmp18: object = 'typexcript'
// const tmp19: object = 12
// const tmp20: object = true
const tmp21: object = { name: 'TypeScript' }
const tmp22: object = [1]
const tmp23: object = () => {}
const tmp24: object = undefined
const tmp25: object = null
const tmp26: object = void 0

// ------------ {} ----------------
const tmp27: {} = 'typexcript'
const tmp28: {} = 12
const tmp29: {} = true
const tmp30: {} = { name: 'TypeScript' }
const tmp31: {} = [1]
const tmp32: {} = () => {}
const tmp33: {} = undefined
const tmp34: {} = null
const tmp35: {} = void 0

const tmp36: Record<string, unknown> = { name: 'TypeScript' }
const tmp37: any[] = [1, 2, 3]
const tmp38: (...args: any[]) => any = () => {}

export {}
