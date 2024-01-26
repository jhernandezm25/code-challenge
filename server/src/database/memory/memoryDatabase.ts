import { Name } from "../../models/name";
import { IName } from "../interfaces/IName";
import { v4 as uuidv4 } from 'uuid';
export class InMemoryDatabase implements IName {
  private names: Name[] = [];

  constructor() {
    this.names.push({ id: uuidv4() ,name: "Jorge Hernandez" });
  }

  getNames(): Name[] {
    return this.names;
  }

  addName(id: string ,name: string, avatarData?: string): void {
    this.names.push({ id, name, avatarData });
  }
}
