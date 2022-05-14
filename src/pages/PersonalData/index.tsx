import React, { FC, useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
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
    Wrapper,
    PlusPhoneButton,
    Toggle,
    BottomButton,
    BottomButtonText
} from "./styles";
import { InputComp } from "../../components/InputComp";
import { NextPageButton } from "../../components/NextPageButton";

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
    serviceProvider: boolean,
    birthDate: Date
}

const PersonalData: FC = () => {
    const request = new UserService();
    const navigation = useNavigation();
    const route = useRoute<RouteProp<PersonalDataRouteProp, 'User'>>();
    const { state: data } = useContext(UserContext);
    const tempNameInitials: string = data.user.name[0] + data.user.name[1];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState<Date>();
    const [isBarber, setIsBarber] = useState(true);

    useEffect(() => {
        request.getUserWithFullDataById(data.user.id)
            .then(res => {
                const { user } = res.data
                fillAllFields(user);
            });
    },  []);

    const fillAllFields = (data: iPD) => {
        setName(data.name)
        setEmail(data.email)
        setBirthDate(data.birthDate)
        setIsBarber(data.serviceProvider)
    }

    const handleSave = () => {
        
    }

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
                <InputComp
                    label="Data de Nascimento"
                    placeholder="12/03/1994"
                    value={birthDate}
                    setValue={setBirthDate}
                />
                <Wrapper>
                    <Text style={{
                            fontWeight: 'bold'
                        }}>Barbeiro?</Text>
                    <Toggle
                        value={isBarber}
                        onValueChange={setIsBarber}
                        trackColor={{ false: '#babaca', true: "#000000" }}
                        thumbColor={isBarber ? '#ffffff' : '#cfcfdf'}
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    />
                </Wrapper>
                <Wrapper style={{ display: 'flex', marginTop: 20}}>
                    <BottomButton
                        style={{ backgroundColor: '#b0b0a0'}}
                    >
                        <BottomButtonText
                            style={{ color: '#FFFFFF' }}
                        >
                            Cancelar
                        </BottomButtonText>
                    </BottomButton>
                    <BottomButton
                        style={{ backgroundColor: '#0A0A0A' }}
                    >
                        <BottomButtonText
                            style={{ color: '#FFFFFF' }}
                        >
                            Salvar
                        </BottomButtonText>
                    </BottomButton>
                </Wrapper>
            </FormArea>
            
        </Container>
    )
}

export default PersonalData;
