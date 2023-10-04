export abstract class Animal {
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

const dog1 = new Dog('dog1', 'carlos')
dog1.greeting()
dog1.woof(5)
