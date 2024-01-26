import { Name } from '../../models/name';
import { InMemoryDatabase } from '../memory/memoryDatabase';

export class NameRepository {
  private database: InMemoryDatabase;

  constructor(database: InMemoryDatabase) {
    this.database = database;
  }

  getNames(): Name[] {
    return this.database.getNames();
  }

  addName(name: string): void {
    this.database.addName(name);
  }
}
