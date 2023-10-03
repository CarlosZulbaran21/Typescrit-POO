export class MyDate {
  constructor (
    public year: number = 2001,
    private _month: number = 12,
    private _day: number = 21
  ) {}

  printFormat (): string {
    return this.day + '/' + this._month + '/' + this.year
  }

  add (amount: number, type: 'days' | 'months' | 'years'): void {
    if (type === 'days') {
      this._day += amount
    } else if (type === 'months') {
      this._month += amount
    } else if (type === 'years') {
      this.year += amount
    }
  }

  get day (): number {
    return this._day
  }

  get month (): number {
    return this._month
  }

  set month (month: number) {
    this._month = month
  }
}

const myDate = new MyDate(2001, 11, 21)

console.log(myDate.printFormat())
