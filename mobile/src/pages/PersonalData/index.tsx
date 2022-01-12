import React, { FC, useState, useEffect, useContext } from "react";
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
    const { state: data } = useContext(UserContext);
    const tempNameInitials: string = data.user.name[0] + data.user.name[1];

    // definindo contexto de dados do usuario
    // iniciando desenvolvimento de itens visuais na tela

    return (
        <Container>
            <Header>
                <UserInfoTitle>Dados Pessoais</UserInfoTitle>
                <UserAvatar>{tempNameInitials}</UserAvatar>
            </Header>
        </Container>
    )
}

export default PersonalData;