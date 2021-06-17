import ConstantService from "./ConstantService";
import { UtilsService } from "./UtilsService";
import { Service } from "../models/interfaces/Service";

export class UserService {
    private constanteService = ConstantService;
    private utilService = new UtilsService();

    getUsers = async (onlyBarbers = false) => {
        console.log('AQUI ZÉ', await this.utilService.buildHeader())

        if(onlyBarbers)
            return this.constanteService.post('/users/', { onlyBarbers });
                
        return this.constanteService.get(
            '/users/',
            { headers: { 'Authorization': await this.utilService.buildHeader() } }
        );
    }

    getUserById = async (id: string) => {
        return this.constanteService.get(`users/${id}`, { headers: { 'Authorization': await this.utilService.buildHeader() }});
    }

    getUserWithFullDataById = async (id: string) => {
        return this.constanteService.get<{
            user: {
                serviceProvider: boolean,
                stars: number,
                phones: Array<any>,
                _id: string,
                name: string
            },
            services: Array<Service>
        }>(`users/services/${id}`, { headers: { 'Authorization': await this.utilService.buildHeader() }});
    }
}