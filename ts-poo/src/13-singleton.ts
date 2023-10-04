export class MyService {
  static instance: MyService | null = null

  private constructor (public name: string) {}

  getName (): string {
    return this.name
  }

  static create (name: string): MyService {
    if (MyService.instance === null) {
      MyService.instance = new MyService(name)
    }
    return MyService.instance
  }
}

const myService2 = MyService.create('service 2')
console.log(myService2)
