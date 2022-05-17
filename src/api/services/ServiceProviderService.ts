import ConstantService from "./ConstantService";
import { UtilsService } from "./UtilsService";

import { Service } from "../interfaces/Service";
import { User } from "../interfaces/User";
import { ServiceProvider } from "../interfaces/ServiceProvider";


export class SeviceProviderService {
    private constantService = ConstantService;
    private utilService = new UtilsService();

    getServiceProviders = async (): Promise<User[]> => {

        const { data } = await this.constantService.get(
            '/serviceProviders/',
            { headers: { 'Authorization': await this.utilService.buildHeader() } }
        );

        return data;
    }

    getServiceProviderById = async (id: string): Promise<User> => {

        const { data } = await this.constantService.get(
            `serviceProviders/${id}`,
            { headers: { 'Authorization': await this.utilService.buildHeader() }}
        );

        return data;
    }

    getUserWithFullDataById = async (id: string): Promise<ServiceProvider> => {

        const { data } = await this.constantService.get(`users/services/${id}`, { headers: { 'Authorization': await this.utilService.buildHeader() }});

        return data;
    }
}