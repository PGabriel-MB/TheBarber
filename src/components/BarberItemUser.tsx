import React from 'react';
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { User } from "../api/interfaces/User";
import { Star } from "./Stars";

const Area = styled.TouchableOpacity`
    background-color: #ffffff;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

// const Avatar = styled.Image`
//     width: 88px;
//     height: 88px;
//     border-radius: 20px;
// `;

const Avatar = styled.Text`
    font-size: 30px;
    color: red;
`;


const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;
const UserName = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

const SeeProfileButton = styled.TouchableOpacity`
    width: 85px;
    height: 26px;
    background-color: #AAAAAA;
    border-radius: 10px;
    justify-content: center;
    align-items: center
`;
const SeeProfileButtonText = styled.Text`
    color: #ffffff;
    font-size: 16px;
`;

export const BarberItemUser = ( data: User ) => {
    const letter = data.name[0] + data.name[1];
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('Barber', {
            id: data._id,
            ranking: 1.5,
            name: data.name
        });
    }
    return (
        <Area onPress={handleClick}>
            <Avatar>{letter.toUpperCase()}</Avatar>
            <InfoArea>
                <UserName>{data.name}</UserName>

                <Star showRankingNumber={true} ranking={1.5} />
                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}