import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from 'styled-components/native';

const Card = styled.View``;

const Button = styled.TouchableOpacity``;

const ButtonText = styled.Text``;

const ServiceInfo = styled.View``;

const Price = styled.Text``;

const ServiceTitle = styled.Text``;

interface ServiceItemProps {
    name: string,
    price: number,
    serviceId: string
}


export const ServiceItem = (props: ServiceItemProps)  => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate
    }

    return (
        <Card>
            <ServiceInfo>
                <ServiceTitle>{ props.name }</ServiceTitle>
                <Price>{ props.price }</Price>
            </ServiceInfo>
            <Button>
                <ButtonText onPress={handlePress}>
                    Agendar
                </ButtonText>
            </Button>
        </Card>
    );
}