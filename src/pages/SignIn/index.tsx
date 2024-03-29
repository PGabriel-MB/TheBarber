import React, { useState, useContext } from "react";
import { Image, StyleSheet, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    Container,
    InputArea,
    Input,
    LoginButton,
    SmallText,
    LoginTextButton
} from "./styles";
import { AuthService } from "../../api/services/AuthService";
import { UserContext } from "../../contexts/UserContext";

const SignIn: React.FC = () => {
    const { dispatch: userDispatch } = useContext(UserContext);


    const authService = new AuthService();

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigateToHome = async () => {

        if (email !== '' && password !== '') {
            await authService.signIn({ email, password })
                .then(async data => {
                    await AsyncStorage.setItem('token', data.token);

                    userDispatch({
                        type: 'setUser',
                        payload: data.user
                    });

                    navigation.reset({
                        routes: [{name: 'MainTab'}]
                    });
                })
                .catch(err => {
                    alert('E-mail e/ou senha inválidos!')
                    console.log(err)
                });
        } else {
            alert('Verifique todos os campos!');
        }
    }

    const navigateToSignUp = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    return (
        <Container>
            <Image style={styles.imagem} source={require('../../assets/TheBarberLogo.png')} />

            <InputArea>
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
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                />

                <LoginButton
                    onPress={navigateToHome}
                >
                    <LoginTextButton>Login</LoginTextButton>
                </LoginButton>
            </InputArea>

            <SmallText onPress={navigateToSignUp}>
                <Text style={styles.messageTxt}>Não Possui Conta? </Text>
                <Text style={{ fontWeight: '900', color: '#757575' }}>Cadastre-se</Text>
            </SmallText>
        </Container>
    );
}

const styles = StyleSheet.create({
    imagem: {
        width: 141,
        height: 89,
        marginBottom: 25
    },
    messageTxt: {
        color: '#757575'
    }
});

export default SignIn;