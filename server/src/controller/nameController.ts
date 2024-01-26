import { NameRepository } from "../database/repository/nameRepository";
import { InMemoryDatabase } from "../database/memory/memoryDatabase";

const database = new InMemoryDatabase();
const nameRepository = new NameRepository(database);

export class NameController {
  public getNames() {
    try {
      return { code: 200, data: nameRepository.getNames() };
    } catch (error) {
      return { code: 500, data: error.message };
    }
  }

  public addName(name: string) {
    try {
      return { code: 200, data: nameRepository.addName(name) };
    } catch (error) {
      return { code: 500, data: error.message };
    }
  }
}
