import React from "react";
import { Image, StyleSheet, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
    Container,
    InputArea,
    Input,
    LoginButton,
    SmallText,
    LoginTextButton
} from "./styles";


const SignIn: React.FC = () => {
    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.reset({
            routes: [{name: 'MainTab'}]
        })
    }

    const navigateToSignUp = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    return (
        <Container>
            <Image style={styles.imagem} source={require('../../../assets/TheBarberLogo.svg')} />

            <InputArea>
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
        marginBottom: 70
    },
    messageTxt: {
        color: '#757575'
    }
});

export default SignIn;