const reutrnNum = () => 1 + 49

enum Items {
  Foo,
  Baz = reutrnNum(),
  Bar = 2,
}

const fooValue = Items.Foo
console.log(fooValue)
const fooKey = Items[0]
console.log(fooKey)

// 常量枚举，无编译产物
const enum Items2 {
  Foo,
  Bar,
  Baz,
}
