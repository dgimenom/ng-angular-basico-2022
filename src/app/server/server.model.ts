export class Server {
  public name: string;
  public id: number;
  public status: string;

  constructor(name: string, id: number, status: string) {
    this.name = name;
    this.id = id;
    this.status = status;
  }
}
