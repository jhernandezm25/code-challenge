import { Name } from '../../models/name';

export interface IName {
    getNames(): Name[] 
    addName(name: string, avatarData?: string): void 
    getNameById(id: string): Name | undefined
    updateName(id: string, name: string, avatarData?: string): any
}