import { User } from './User'

export interface LoginCredentials {
    email: string,
    password: string
}

export interface RegisterCredentials {
    name: string,
    email: string,
    password: string
}

export interface Auth {
    user: User,
    token: string
}
 