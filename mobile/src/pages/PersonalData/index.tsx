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
    Wrapper,
    Button,
    Toggle
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
    const [phones, setPhones] = useState('')
    const [birthDate, setBirthDate] = useState('');
    const [isBarber, setIsBarber] = useState(true);

    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

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
                <Wrapper>
                    <InputComp
                        label="Telefone"
                        placeholder="(00) 90000-0000"
                        value={phones}
                        setValue={setPhones}
                        styles={{ width: '80%' }}
                    />
                    <Button>
                        <Text style={{ color: "white", fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>+</Text>
                    </Button>
                </Wrapper>
                <Wrapper>
                    <InputComp
                        label="Data de Nascimento"
                        placeholder="12/03/1994"
                        value={birthDate}
                        setValue={setBirthDate}
                        styles={{ width: '80%' }}
                    />
                    <View style={{
                        alignContent: 'space-between',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        marginLeft: 7
                    }}>
                        <Text style={{
                            fontWeight: 'bold'
                        }}>Barbeiro?</Text>
                        <Toggle
                            value={isBarber}
                            onValueChange={setIsBarber}
                            trackColor={{ false: '#babaca', true: "#000000" }}
                            thumbColor={isBarber ? '#ffffff' : '#cfcfdf'}
                        />
                    </View>
                </Wrapper>
                <InputComp
                    label="Endereço"
                    placeholder="Avenida JK, 645"
                    value={address}
                    setValue={setAddress}
                />
                <Wrapper>
                    <InputComp
                        label="CEP"
                        placeholder="00000-00"
                        value={zipCode}
                        setValue={setZipCode}
                        styles={{ width: '35%' }}
                    />
                    <InputComp
                        label="Bairro"
                        placeholder="Liberdade"
                        value={district}
                        setValue={setDistrict}
                        styles={{ width: '60%' }}
                    />
                </Wrapper>
                <Wrapper>
                    <InputComp
                        label="Cidade"
                        placeholder="Las Vegas"
                        value={city}
                        setValue={setCity}
                        styles={{ width: '35%' }}
                    />
                    <InputComp
                        label="StaCte"
                        placeholder="Liberdade"
                        value={district}
                        setValue={setDistrict}
                        styles={{ width: '60%' }}
                    />
                </Wrapper>
            </FormArea>
        </Container>
    )
}

export default PersonalData;