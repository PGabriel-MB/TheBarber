export class ConstantService {
    private baseEndPoint = 'http://197.168.0.102:3000';

    constructor(){}

    getEndpoint() {
        return this.baseEndPoint;
    }
}