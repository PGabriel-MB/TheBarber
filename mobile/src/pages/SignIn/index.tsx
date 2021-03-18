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

    }

    const navigateToSignUp = () => {
        navigation.navigate('SignUp');
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
                    <LoginTextButton> Login </LoginTextButton>
                </LoginButton>
            </InputArea>
            <SmallText>
                <Text>Não Possui Conta? </Text> <Text style={{ fontWeight: '900' }}>Cadastre-se</Text>
            </SmallText>
        </Container>
    );
}

const styles = StyleSheet.create({
    imagem: {
        width: 141,
        height: 89,
        marginBottom: 70
    }
});

export default SignIn;