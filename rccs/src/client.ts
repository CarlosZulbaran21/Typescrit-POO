export class Client {
  private readonly _id: number
  private readonly _dni: string
  private readonly _fullName: string

  public get id (): number {
    return this._id
  }

  public get dni (): string {
    return this._dni
  }

  public get fullName (): string {
    return this._fullName
  }

  constructor (id: number, dni: string, fullName: string) {
    this._id = id
    this._dni = dni
    this._fullName = fullName
  }
}
export class BuilderClient {
  private id: number

  private dni: string

  private fullName: string

  constructor (id: number, dni: string, fullName: string) {
    this.id = id
    this.dni = dni
    this.fullName = fullName
  }

  setId (id: number): this {
    this.id = id
    return this
  }

  setDni (dni: string): this {
    this.dni = dni
    return this
  }

  setFullName (fullName: string): this {
    this.fullName = fullName
    return this
  }

  build (): Client {
    return new Client(this.id, this.dni, this.fullName)
  }
}
