import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    TexLogo,
    LoadingIcon
} from "./styles";

const Preload: React.FC = () => {
    const navigation = useNavigation();
    
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');

            if(token) {
                // validar o token
            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);

    return(
        <Container>
            <Image style={styles.imagem} source={require('../../../assets/TheBarberLogo.svg')} />
            <TexLogo>The Barber</TexLogo>
            <LoadingIcon size="large" color="#757575"/>
        </Container>
    )
}

const styles = StyleSheet.create({
    imagem: {
        width: 250,
        height: 250
    }
});

export default Preload;