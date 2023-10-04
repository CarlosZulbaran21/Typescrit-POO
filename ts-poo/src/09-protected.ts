export class Animal {
  constructor (protected name: string) {}

  move (): void {
    console.log('Im moving along!')
  }

  greeting (): void {
    console.log('Hello I"m ' + this.name)
  }
}

export class Dog extends Animal {
  constructor (public owner: string, name: string) {
    super(name)
  }

  woof (times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('woff')
    }
  }
}

const animal1 = new Animal('animal1')

animal1.greeting()
animal1.move()

const dog1 = new Dog('Daniel', 'dog1')

dog1.greeting()
dog1.move()
dog1.woof(2)
