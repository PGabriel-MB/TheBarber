import ConstantService from "./ConstantService";
import { UtilsService } from "./UtilsService";

export class UserService {
    private constanteService = ConstantService;
    private utilService = new UtilsService();

    getUsers = async (onlyBarbers = false) => {
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

    getUserWithServicesById = async (id: string) => {
        return this.constanteService.get(`users/services/${id}`, { headers: { 'Authorization': await this.utilService.buildHeader() }});
    }
}