import  { LatLong } from './LatLong';
import { Address } from './Address';
import { Service } from  './Service'
import { User } from './User';

export interface Appointment {
    when?: Date;
    where?: LatLong | Address;
    service?: Service;
    client?: User;
    serviceProvider?: User;
}