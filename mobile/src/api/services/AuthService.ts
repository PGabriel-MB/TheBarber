import axios from "axios";
import { ConstantService } from "./ConstantService";
import { LoginCredentials, RegisterCredentials } from "../models/interfaces/Credentials";

export class AuthService {
    constructor(
        private constantService: ConstantService
    ){}

    signIn = async (credentials: LoginCredentials) => {
        return await axios.post(`${this.constantService.getEndpoint()}/auth/authenticate`, credentials)
    }

    signUp = async (credentials: RegisterCredentials ) => {
        return await axios.post(`${this.constantService.getEndpoint()}/auth/register`)
    }
}