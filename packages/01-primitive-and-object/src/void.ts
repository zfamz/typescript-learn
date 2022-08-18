void (function iife() {
  console.log('IIFE')
})()

function fun1() {}
function fun2() {
  return
}

function fun3(): void {
  return undefined
}

// "strictNullChecks": false
const voidVar1: void = null
const voidVar2: void = undefined
