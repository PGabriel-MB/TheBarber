import { User } from './User';
import { Service } from './Service';

export type ServiceProvider = {
    services: Service[];
} & User;