import ConstantService from "./ConstantService";
import { AuthData, LoginCredentials, RegisterCredentials,  } from "../interfaces/Auth";

export class AuthService {
    private constantService = ConstantService;

    signIn = async (credentials: LoginCredentials): Promise<AuthData> => {

        const { data } = await this.constantService.post(
            '/auth/authenticate',
            {
                email: credentials.email,
                password: credentials.password
            }
        );

        return data;
    }

    signUp = async (credentials: RegisterCredentials ): Promise<AuthData> => {

        const { data } = await this.constantService.post('/auth/register', credentials);

        return data
    }

    checkToken = async (token: string) => {
        
        const { data } = await this.constantService.post('/validate-token', { token });

        return data;
    }
}