class Base {
  print() {}
}
class Derived extends Base {
  print() {
    super.print()
  }
  // override printWithLove() {}  // error no function in base
}

abstract class AbsBase {
  abstract prop: string
  abstract get getProp(): string
  abstract say(name: string): void
}

class Foo implements AbsBase {
  constructor(public prop: string) {}
  get getProp(): string {
    return this.prop
  }
  say(name: string): void {}
}

interface FooStruct {
  prop: string
  get getProp(): string
  say(name: string): void
}

class Foo1 implements FooStruct {
  prop: string = 'typescript'
  get getProp(): string {
    return this.prop
  }
  say(name: string): void {}
}
