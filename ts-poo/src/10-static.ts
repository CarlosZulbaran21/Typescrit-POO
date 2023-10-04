class MyClass {
  public static getName (): string {
    return 'hello'
  }

  getName (): void {}
}
console.log(MyClass.getName())
MyClass.getName = () => 'thanks'
console.log(MyClass.getName())
