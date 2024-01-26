import { Name } from '../../models/name';
import  { IName }  from '../interfaces/IName';
export class InMemoryDatabase implements IName{
    private names: Name[] = [];

    getNames(): Name[] {
        return this.names;
    }

    addName(name: string): void {
        this.names.push({ name });
    }
}
