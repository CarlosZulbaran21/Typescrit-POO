export class MyDate {
  year: number
  month: number
  day: number

  constructor (year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }

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
