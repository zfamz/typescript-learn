import { features } from 'process'
class Cat {
  eat() {}
}

class Cat1 {
  meow() {}
  eat() {}
}

class Dog {
  eat() {}
}
class Dog1 {
  bark() {}
  eat() {}
}

function feedCat(cat: Cat) {}
function feedCat1(cat: Cat1) {}

feedCat(new Dog())
// Property 'meow' is missing in type 'Dog' but required in type 'Cat1'.
// feedCat1(new Dog())
feedCat(new Dog1())

// ---
class Cat2 {
  eat(): boolean {
    return true
  }
}

class Dog2 {
  eat(): number {
    return 233
  }
}

function feedCat2(cat: Cat2) {}
// feedCat2(new Dog2)

export {}
