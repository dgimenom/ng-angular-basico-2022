export class Server {
  public name: string;
  public id: number;
  public status: string;
  public instanceType: string;

  constructor(name: string, id: number, status: string, instanceType: string) {
    this.name = name;
    this.id = id;
    this.status = status;
    this.instanceType = instanceType;
  }
}
