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

  addName(id: string, name: string, avatarData?: string): void {
    this.database.addName(id, name, avatarData);
  }

  updateName(id: string, name?: string, avatarData?: string): any {
    return this.database.updateName(id, name, avatarData);
  }
}
