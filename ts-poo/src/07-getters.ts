export class MyDate {
  constructor (
    public year: number = 2001,
    public month: number = 12,
    private _day: number = 21
  ) {}

  printFormat (): string {
    return this.day + '/' + this.month + '/' + this.year
  }

  add (amount: number, type: 'days' | 'months' | 'years'): void {
    if (type === 'days') {
      this._day += amount
    } else if (type === 'months') {
      this.month += amount
    } else if (type === 'years') {
      this.year += amount
    }
  }

  get day (): number {
    return this._day
  }
}

const myDate = new MyDate(2001, 11, 21)

console.log(myDate.printFormat())
