export class ConstantService {
    private baseEndPoint = 'http://localhost:3000';

    constructor(){}

    getEndpoint() {
        return this.baseEndPoint;
    }
}