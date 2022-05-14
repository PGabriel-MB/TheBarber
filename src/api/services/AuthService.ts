import ConstantService from "./ConstantService";
import { AuthData, LoginCredentials, RegisterCredentials,  } from "../interfaces/Auth";

export class AuthService {
    private constantService = ConstantService;

    signIn = async (credentials: LoginCredentials): Promise<AuthData> => {
        
        return await this.constantService.post(
            '/auth/authenticate',
            {
                email: credentials.email,
                password: credentials.password
            }
        );
    }

    signUp = async (credentials: RegisterCredentials ): Promise<AuthData> => {
        return await this.constantService.post('/auth/register', credentials);
    }

    checkToken = async (token: string) => {
        return await this.constantService.post('/validate-token', { token });
    }
}