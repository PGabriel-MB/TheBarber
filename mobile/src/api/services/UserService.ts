import ConstantService from "./ConstantService";
import { UtilsService } from "./UtilsService";

export class UserService {
    private constanteService = ConstantService;
    private utilService = new UtilsService();

    getUsers(onlyBarbers = false) {
        if(onlyBarbers)
            return this.constanteService.post('/users/', { onlyBarbers });
        return this.constanteService.get(
            '/users/',
            { headers: this.utilService.buildHeader()}
        );
    }
}