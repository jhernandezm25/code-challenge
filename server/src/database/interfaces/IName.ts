import { Name } from '../../models/name';

export interface IName {
    getNames(): Name[] 
    addName(name: string, avatarData?: string): void 
}