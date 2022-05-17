import ConstantService from "./ConstantService";
import { UtilsService } from "./UtilsService";
import { Service } from "../interfaces/Service";

export class UserService {
    private constantService = ConstantService;
    private utilService = new UtilsService();

    getUsers = async (onlyBarbers = false) => {
        if(onlyBarbers)
            return this.constantService.post('/users/', { onlyBarbers });
                
        return this.constantService.get(
            '/users/',
            { headers: { 'Authorization': await this.utilService.buildHeader() } }
        );
    }

    getUserById = async (id: string) => {
        return this.constantService.get(`users/${id}`, { headers: { 'Authorization': await this.utilService.buildHeader() }});
    }

    getUserWithFullDataById = async (id: string) => {
        return this.constantService.get<{
            user: {
                serviceProvider: boolean,
                stars: number,
                phones: Array<any>,
                _id: string,
                name: string,
                email: string,
                birthDate: Date
            },
            services: Array<Service>
        }>(`users/services/${id}`, { headers: { 'Authorization': await this.utilService.buildHeader() }});
    }
}