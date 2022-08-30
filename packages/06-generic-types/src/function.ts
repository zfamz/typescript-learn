/* function
 * 1. 字符串：返回部分截取
 * 2. 数字： 返回它的n倍
 * 3. 对象： 修改它的属性并返回
 */

import { wrap } from 'module'

function handle2(input: any): any {}
function handle3(input: string | number | {}): string | number | {} {
  return input
}
const shouldBeString = handle3('typescript')
function handle4(input: string): string
function handle4(input: number): number
function handle4(input: {}): {}
function handle4(input: string | number | {}): string | number | {} {
  return input
}

const shouldBeString1 = handle3('typescript')

function handle<T>(input: T): T {
  return input
}

const author = 'typescript'
let _author = 'typescript'

const r1 = handle(author)
const r2 = handle(_author)

function swap<T, K>([start, end]: [T, K]): [K, T] {
  return [end, start]
}
const swap1 = swap(['type', 'script'])
const swap2 = swap(['typescript', 12])
const swap3 = swap([{}, { name: 'typescript' }])

// ---
// 不处理对象了
function deal<T extends string | number>(input: T): T {
  return input
}
// 只处理元组的情况
function swapNumber<T, K>([start, end]: [T, K]): [K, T] {
  return [end, start]
}

export {}
