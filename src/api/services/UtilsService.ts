import AsyncStorage from "@react-native-async-storage/async-storage";

export class UtilsService {
    
    public buildHeader = async () => {
        const token = await AsyncStorage.getItem('token');
        return `Bearer ${token}`;
    }
}