class Queue<TElementType> {
  private _list: TElementType[]
  constructor(initial: TElementType[]) {
    this._list = initial
  }
  enqueue<TType extends TElementType>(ele: TType): TElementType[] {
    this._list.push(ele)
    return this._list
  }
  enqueueWithUnknowType<TType>(ele: TType): (TType | TElementType)[] {
    return [...this._list, ele]
  }
  dequeue(): TElementType[] {
    this._list.shift()
    return this._list
  }
}

export {}
