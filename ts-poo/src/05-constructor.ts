export class MyDate {
  constructor (
    public year: number = 2001,
    public month: number = 12,
    private day: number = 21
  ) {}

  printFormat (): string {
    return this.day + '/' + this.month + '/' + this.year
  }

  add (amount: number, type: 'days' | 'months' | 'years'): void {
    if (type === 'days') {
      this.day += amount
    } else if (type === 'months') {
      this.month += amount
    } else if (type === 'years') {
      this.year += amount
    }
  }
}

const myDate = new MyDate(2001, 11, 21)

console.log(myDate.printFormat())
