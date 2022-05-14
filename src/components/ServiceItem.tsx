import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from 'styled-components/native';

const Card = styled.View`
    margin: 10px 0;
    flex-direction: row;
    justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
    background-color: #AAAAAA;
    padding: 12px 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
`;

const ButtonText = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
`;

const ServiceInfo = styled.View``;

const Price = styled.Text`
    font-size: 16px;
`;

const ServiceTitle = styled.Text`
    color: #0A0A0A;
    font-weight: bold;
    font-size: 18px;
`;

export interface ServiceItemProps {
    name: string,
    price: number,
    serviceId: string
}


export const ServiceItem = (props: ServiceItemProps)  => {
    const navigation = useNavigation();

    const handlePress = () => {
        // navigation.navigate
    }

    return (
        <Card>
            <ServiceInfo>
                <ServiceTitle>{ props.name }</ServiceTitle>
                <Price>R$ { props.price }</Price>
            </ServiceInfo>
            <Button>
                <ButtonText onPress={handlePress}>
                    Agendar
                </ButtonText>
            </Button>
        </Card>
    );
}