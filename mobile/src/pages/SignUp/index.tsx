import React, { useState } from "react";
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


const SignUp: React.FC = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleRegistrate = () => {
        if(name && email && password1 && password2) {
            if (password1 === password2) {
                // registrate the user
            } else {
                ToastAndroid.show('As senhas não conferem!', ToastAndroid.SHORT);
            }

        } else {
            ToastAndroid.show('Verifique se todos campos estão preenchidos!', ToastAndroid.SHORT);
        }

        //navigation.reset({
        //    routes: [{name: 'MainTab'}]
        //})
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
        marginBottom: 10
    },
    messageTxt: {
        color: '#757575'
    }
});

export default SignUp;