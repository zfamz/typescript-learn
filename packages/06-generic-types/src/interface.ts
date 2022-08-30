interface IRes<TData = unknown> {
  code: number
  error?: string
  data: TData
}

interface IUserProfileRes {
  name: string
  homepage: string
  avatar: string
}

function fetchUserProfile(): Promise<IRes<IUserProfileRes>> {
  return Promise.resolve({
    code: 0,
    data: { name: 'typescript', homepage: '/', avatar: './avatar' },
  })
}

type StatusSucceed = boolean
function handleOperation(): Promise<IRes<StatusSucceed>> {
  return Promise.resolve({ code: 1, data: true })
}

interface IPaginationRes<TItem = unknown> {
  data: TItem[]
  page: number
  totalCount: number
  hasNextPage: boolean
}

function fetchUserProfileList(): Promise<
  IRes<IPaginationRes<IUserProfileRes>>
> {
  return Promise.resolve({
    code: 0,
    data: {
      page: 1,
      totalCount: 10,
      hasNextPage: false,
      data: [{ name: 'name', homepage: '/', avatar: 'avatar.jpg' }],
    },
  })
}

export {}
