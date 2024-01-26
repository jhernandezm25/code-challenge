import { Name } from "../../models/name";
import { IName } from "../interfaces/IName";
import { v4 as uuidv4 } from "uuid";
export class InMemoryDatabase implements IName {
  private names: Name[] = [];

  constructor() {
    this.names.push({ id: uuidv4(), name: "Jorge Hernandez" });
  }

  getNames(): Name[] {
    return this.names;
  }

  addName(id: string, name: string, avatarData?: string): void {
    this.names.push({ id, name, avatarData });
  }

  getNameById(id: string): Name | undefined {
    return this.names.find((name) => name.id === id);
  }

  updateName(id: string, name?: string, avatarData?: string): any {
    const index = this.names.findIndex((name) => name.id === id);

    if (index !== -1) {
      if (name) {
        this.names[index].name = name;
      }
      if (avatarData) {
        this.names[index].avatarData = avatarData;
      }
      return this.names.find((name) => name.id === id);
    }
    return false;
  }
}
