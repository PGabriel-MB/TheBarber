import React from "react";
import { Image, StyleSheet, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
    Container,
    InputArea,
    Input,
    LoginButton,
    LoginTextButton
} from "./styles";


const SignUp: React.FC = () => {
    const navigation = useNavigation();

    const navigateToHome = () => {

    }


    return (
        <Container>
            <Image style={styles.imagem} source={require('../../../assets/TheBarberLogo.svg')} />

            <InputArea>
                <Input
                    maxLength={40}
                    placeholder='Usuário'
                    placeholderTextColor="#fff"
                    textContentType='name'
                />

                <Input
                    maxLength={40}
                    placeholder='E-mail'
                    placeholderTextColor="#fff"
                    textContentType='emailAddress'
                />


                <Input
                    maxLength={40}
                    placeholder='Senha'
                    placeholderTextColor="#fff"
                    textContentType='password'
                    secureTextEntry={true}
                />

                <Input
                    maxLength={40}
                    placeholder='Confirme a Senha'
                    placeholderTextColor="#fff"
                    textContentType='password'
                    secureTextEntry={true}
                />

                <LoginButton
                    onPress={navigateToHome}
                >
                    <LoginTextButton>Cadastrar</LoginTextButton>
                </LoginButton>
            </InputArea>
        </Container>
    );
}

const styles = StyleSheet.create({
    imagem: {
        width: 141,
        height: 89,
        marginBottom: 10
    },
    messageTxt: {
        color: '#757575'
    }
});

export default SignUp;