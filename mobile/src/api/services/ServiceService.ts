import ConstantService from './ConstantService';
import { UtilsService } from "./UtilsService";


export class ServiceService {
    private constantService = ConstantService;
    private utilService = new UtilsService();

    getServiceByUserId = async (userId: string) => {
        return this.constantService.get(
            `/services/${userId}`,
            { headers: { 'Authorization': this.utilService.buildHeader() } }
        );
    }
}