import { User } from './User';

export interface Service {
    _id: any,
    name: string,
    description: string,
    price: number,
    serviceProvider: User
}