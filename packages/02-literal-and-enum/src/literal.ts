interface Res {
  code: 10000 | 10001 | 50000
  status: 'success' | 'failure'
  data: any
}

declare var res: Res
if (res.status === 'success') {
}

const str1: 'typescript' = 'typescript'
// const str2: 'typescript' = 'Typescript'

interface Tmp {
  user: { vip: true; expires: string } | { vip: false; promotion: string }
}
declare var tmp: Tmp
if (tmp.user.vip) {
  console.log(tmp.user.expires)
}
