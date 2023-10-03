export class Animal {
  constructor (public name: string) {}

  move (): void {
    console.log('Im moving along!')
  }

  gretting (): void {
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

const fifi = new Animal('fifi')

fifi.gretting()
fifi.move()

const cheis = new Dog('Daniel', 'cheis')

cheis.gretting()
cheis.move()
cheis.woof(2)
