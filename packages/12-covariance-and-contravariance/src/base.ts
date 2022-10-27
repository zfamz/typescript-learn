class Animal {
  asPet() {}
}

class Dog extends Animal {
  bark() {}
}

class Corgi extends Dog {
  cute() {}
}

type DogFactory = (args: Dog) => Dog

function transformDogAndBark(dogFactory: DogFactory) {
  const dog = dogFactory(new Dog())
  dog.bark()
}

function makeDogBark(dog: Dog) {
  dog.bark()
}

makeDogBark(new Corgi())
// makeDogBark(new Animal()) // error

//  ---
type AsFuncArgType<T> = (arg: T) => void
type AsFuncReturnType<T> = (arg: unknown) => T

type CheckReturnType = AsFuncReturnType<Corgi> extends AsFuncReturnType<Dog>
  ? true
  : false
type CheckArgType = AsFuncArgType<Dog> extends AsFuncArgType<Animal>
  ? true
  : false
