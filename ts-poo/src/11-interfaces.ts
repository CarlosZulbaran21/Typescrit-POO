export interface Driver {
  database: string
  password: string
  port: number
  connect: () => void
}

export class OracleDriver implements Driver {
  constructor (public database: string,
    public password: string,
    public port: number) {}

  connect (): void {
    console.log('connecting')
  }
}
