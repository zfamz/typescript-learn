class Foo {
  prop: string
  constructor(inputProp: string) {
    this.prop = inputProp
  }
  print(addon: string): void {
    console.log(`${this.prop} and ${addon}}`)
  }
  get propA(): string {
    return this.prop
  }
  set propA(value: string) {
    this.prop = this.prop + value
  }
}

// private public protected
class Foo1 {
  constructor(private prop: string) {}
  protected print(addon: string): void {
    console.log(`${this.prop} and ${addon}}`)
  }
  public get propA(): string {
    return this.prop
  }
  public set propA(value: string) {
    this.prop = this.prop + value
  }
}

// static
class Foo3 {
  static staticHandler(): void {}
  constructor(public name: string) {}
  public instanceHandler(): void {}
}

export {}
