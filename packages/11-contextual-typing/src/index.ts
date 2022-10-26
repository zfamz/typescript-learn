import { declare } from '../../07-structual-system/src/struct-as-nminal'
window.onerror = (event, source, line, col, error) => {}

interface Handler {
  onerror: OnErrorEventHandlerNonNull
}

interface OnErrorEventHandlerNonNull {
  (
    event: string | Event,
    source?: string,
    lineno?: number,
    colno?: number,
    brror?: Error
  ): any
}

type CustomHandler = (name: string, age: number) => boolean

const handler: CustomHandler = (arg1, arg2) => false

declare const struct: {
  handler: CustomHandler
}

struct.handler = (name, age) => {
  return true
}

window.onerror = (e) => {}
// window.onerror = (a1, a2, a3, a4, a5, a6) => {}

declare let func: (raw: number) => (input: string) => any

func = (raw) => {
  return (input) => {}
}

export {}
