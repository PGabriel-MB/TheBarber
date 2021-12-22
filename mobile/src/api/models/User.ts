export class User {
    private _id: string = '';
    private _name: string = '';
    private _email: string = '';
    private _password: string = '';

    constructor(user?: any) {
        if (user){
            this._id = user.id;
            this._name = user.name;
            this._email = user.email;
            this._password = user.password;
        }
    }

    get id(): string {
        return this._id;
    }
    
    set id(value: string): void {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }
    
    set name(value: string): void {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }
    
    set email(value: string): void {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }
    
    set password(value: string): void {
        this._password = value;
    }
}