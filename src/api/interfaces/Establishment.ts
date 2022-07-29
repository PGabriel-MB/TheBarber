import { Service } from './Service';
import { User } from './User';

export interface Establishment {
    _id?: string;
    name?: string;
    cnpj?: string;
    services?: Service[];
    owner?: User;
}