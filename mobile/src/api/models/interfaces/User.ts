export interface User {
    _id: String;
    name?: String;
    email?: String;
    created?: Date;
    phones?: String[];
    serviceProvider?: boolean;
    services?: [];
    stars?: number;
    updated?: Date;
    comments?: String;
}