import React from "react";
import { Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { 
    Container,
    Input
} from "./styles";


const SignIn: React.FC = () => (
    <Container>
        <Image style={styles.imagem} source={require('../../../assets/TheBarberLogo.svg')} />
        <Input
            maxLength={40}
            placeholder='E-mail'
            placeholderTextColor="#fff"
            textContentType='emailAddress'
        />
    </Container>
);

const styles = StyleSheet.create({
    imagem: {
        width: 141,
        height: 89,
        marginBottom: 30
    }
});

export default SignIn;