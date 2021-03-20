import React from "react";
import { Image, StyleSheet, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
    Container,
    InputArea,
    Input,
    LoginButton,
    LoginTextButton,
    SmallText
} from "./styles";


const SignUp: React.FC = () => {
    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.reset({
            routes: [{name: 'MainTab'}]
        })
    }

    const navigateToSignIn = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
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
        marginBottom: 10
    },
    messageTxt: {
        color: '#757575'
    }
});

export default SignUp;