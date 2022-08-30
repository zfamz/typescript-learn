class CNY {
  private __tag!: void
  constructor(public value: number) {}
}

class USD {
  private __tag!: void
  constructor(public value: number) {}
}

const CNYCount = new CNY(120)
const USDCount = new USD(120)

function addCNY(source: CNY, input: CNY) {
  return source.value + input.value
}

addCNY(CNYCount, CNYCount)
// addCNY(CNYCount, USDCount)

export {}
