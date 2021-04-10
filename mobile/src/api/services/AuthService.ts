import ConstantService from "./ConstantService";
import { LoginCredentials, RegisterCredentials } from "../models/interfaces/Credentials";

export class AuthService {
    private constantService = ConstantService;

    signIn = async (credentials: LoginCredentials) => {
        return await this.constantService.post('/auth/authenticate', { email: credentials.email, password: credentials.password });
    }

    signUp = async (credentials: RegisterCredentials ) => {
        return await this.constantService.post('/auth/register', credentials);
    }
}