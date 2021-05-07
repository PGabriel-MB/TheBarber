import React, { useState, useEffect } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import { Container, TextLogo} from "./styles";
import { UserService } from "../../api/services/UserService";
import { Service } from "../../api/models/interfaces/Service";


interface iProps {}

interface iState {
    id: string,
    name: string,
    ranking: number
}

type BarberRouteProp = {
    Barber: {
        id: string,
        name: string,
        ranking: number
    }
}

const Barber = () => {
    const request = new UserService();
    const navigation = useNavigation();
    const route = useRoute<RouteProp<BarberRouteProp, 'Barber'>>();

    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        name: route.params.name,
        ranking: route.params.ranking,
        services: []
    });
    
    const getBarberInfo = () => {
        request.getUserById(userInfo.id)
            .then(async res => {
                setUserInfo({...await res.data.user, services: res.data.services});
                console.log(await userInfo)
            })
            .catch(async err => {
                console.log(await err)
                alert('Houve algum erro na obtenção dos dados!');
            });
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