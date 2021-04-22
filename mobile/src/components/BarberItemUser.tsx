import React from 'react';
import styled from "styled-components/native";
import { User } from "../api/models/interfaces/User";

const Area = styled.TouchableOpacity`
    background-color: #ffffff;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
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
    return (
        <Area>
            <Avatar source="" />
            <InfoArea>
                <UserName>{data.name}</UserName>

                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}