import React, { useState, useEffect } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import { Container, TextLogo} from "./styles";
import { UserService } from "../../api/services/UserService";
import { Service } from "../../api/models/interfaces/Service";


interface iProps {}

interface iState {
    _id: string,
    name: string,
    stars: number,
    services: Array<Service>
    phones: Array<any>
}

type BarberRouteProp = {
    Barber: {
        id: string,
        name: string,
        stars: number
    }
}

const Barber: React.FunctionComponent = () => {
    const request = new UserService();
    const navigation = useNavigation();
    const route = useRoute<RouteProp<BarberRouteProp, 'Barber'>>();

    const [userInfo, setUserInfo] = useState<iState>({
        _id: route.params.id,
        name: route.params.name,
        stars: route.params.stars || 0,
        phones: [],
        services: []
    });
    const [loading, setLoading] = useState<boolean>(false)
    
    const getBarberInfo = () => {
        setLoading(true);
        request.getUserWithFullDataById(userInfo._id)
            .then(async res => {
                setUserInfo({...await res.data.user, services: res.data.services});
                console.log(await userInfo)
            })
            .catch(async err => {
                console.log(await err)
                alert('Houve algum erro na obtenção dos dados!');
            }).finally(() => setLoading(false));
    }

    useEffect(() => {
        getBarberInfo();
    },[]);

    return (
        <Container>
            <TextLogo>Eu sou {userInfo.name} </TextLogo>
        </Container>
    )
}
export default Barber;