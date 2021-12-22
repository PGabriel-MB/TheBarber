import React, { FC, useState, useEffect } from "react";
import {
    useNavigation,
    useRoute,
    RouteProp
} from '@react-navigation/native'

import {
    Container,
    Header,
    UserInfo,
    UserInfoTitle,
    UserAvatar
} from "./styles";

import { UserService } from "../../api/services/UserService";
import { UserContext } from "../../contexts/UserContext";


type PersonalDataRouteProp = {
    User: {
        id: string
    }
}

interface iPD {
    _id: string,
    name: string,
    email: string,
    phones: Array<any>,
    serviceProvider: boolean,
    birthDate: Date,
    address: object
}

const PersonalData: FC = () => {
    const request = new UserService();
    const navigation = useNavigation();
    const route = useRoute<RouteProp<PersonalDataRouteProp, 'User'>>();
    const data = React.useContext(UserContext);

    // definindo contexto de dados do usuario
    // iniciando desenvolvimento de itens visuais na tela

    return (
        <Container>
            <Header>
                <UserInfoTitle>Dados Pessoais</UserInfoTitle>
            </Header>
        </Container>
    )
}

export default PersonalData;