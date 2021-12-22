import React, { useState, useContext } from "react";
import { Image, StyleSheet, Text, ToastAndroid } from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
    Container,
    InputArea,
    Input,
    RegistrateButton,
    RegistrateTextButton,
    SmallText
} from "./styles";
import { AuthService } from "../../api/services/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../contexts/UserContext";


const SignUp: React.FC = () => {
    const navigation = useNavigation();
    const authService = new AuthService();
    const { dispatch: userDispatch } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleRegistrate = () => {
        if (name && email && password1 && password2) {
            if (password1 === password2) {
                authService.signUp(
                    { name, email, password: password2 }
                ).then(res => {
                    AsyncStorage.setItem('token', res.data.token);

                    ToastAndroid.show('Cadastro realizado com Sucesso!', ToastAndroid.SHORT);

                    userDispatch({
                        type: 'setUser',
                        payload: res.data.user
                    });

                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                }).catch(() => alert('Oops!... Falha no Cadastro. Tente fazer login ou cadastre-se novamente.'));
            } else {
                ToastAndroid.show('As senhas não conferem!', ToastAndroid.SHORT);
            }

        } else {
            ToastAndroid.show('Verifique se todos campos estão preenchidos!', ToastAndroid.SHORT);
        }
    }

    const navigateToSignIn = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        })
    }


    return (
        <Container>
            <Image style={styles.imagem} source={require('../../assets/TheBarberLogo.png')} />

            <InputArea>
                <Input
                    maxLength={40}
                    placeholder='Usuário'
                    placeholderTextColor="#fff"
                    textContentType='name'
                    value={name}
                    onChangeText={(t) => setName(t)}
                />

                <Input
                    maxLength={40}
                    placeholder='E-mail'
                    placeholderTextColor="#fff"
                    textContentType='emailAddress'
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    autoCapitalize='none'
                    autoCompleteType='email'
                />


                <Input
                    maxLength={40}
                    placeholder='Senha'
                    placeholderTextColor="#fff"
                    textContentType='password'
                    secureTextEntry={true}
                    value={password1}
                    onChangeText={(t) => setPassword1(t)}
                />

                <Input
                    maxLength={40}
                    placeholder='Confirme a Senha'
                    placeholderTextColor="#fff"
                    textContentType='password'
                    secureTextEntry={true}
                    value={password2}
                    onChangeText={(t) => setPassword2(t)}
                />

                <RegistrateButton
                    onPress={handleRegistrate}
                >
                    <RegistrateTextButton>Cadastrar</RegistrateTextButton>
                </RegistrateButton>
            </InputArea>

            <SmallText onPress={navigateToSignIn}>
                <Text style={styles.messageTxt}>Já possui Conta? </Text>
                <Text style={{ fontWeight: '900', color: '#757575' }}>Faça Login</Text>
            </SmallText>
        </Container>
    );
}

const styles = StyleSheet.create({
    imagem: {
        width: 141,
        height: 89,
        marginBottom: 5
    },
    messageTxt: {
        color: '#757575'
    }
});

export default SignUp;