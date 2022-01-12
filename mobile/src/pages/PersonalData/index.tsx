import React, { FC, useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
    UserAvatar,
    FormArea,
} from "./styles";
import { InputComp } from "../../components/InputComp";

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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [ddd, setDdd] = useState('');
    const [phones, setPhones] = useState('')

    // definindo contexto de dados do usuario
    // iniciando desenvolvimento de itens visuais na tela

    return (
        <Container>
            <Header>
                <UserInfoTitle>Dados Pessoais</UserInfoTitle>
                <UserAvatar>{tempNameInitials}</UserAvatar>
            </Header>
            <FormArea>
                <InputComp
                    label="Nome Completo"
                    placeholder='Seu nome aqui'
                    value={name}
                    setValue={setName}
                />
                <InputComp
                    label="Email"
                    placeholder='email@exemplo.com'
                    value={email}
                    setValue={setEmail}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <InputComp
                        label="Telefone"
                        placeholder="(00) 90000-0000"
                        value={phones}
                        setValue={setPhones}
                        styles={{
                            width: '80%'
                        }}
                    />
                    <TouchableOpacity style={{
                        width:'15%',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        maxHeight: '50%'
                    }}>
                        <Text>Teste</Text>
                    </TouchableOpacity>
                </View>
            </FormArea>
        </Container>
    )
}

export default PersonalData;