import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #1C1C1C;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.TextInput`
    background-color: #757575;
    color: #333;
    font-size: 20px;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 50px;
`;

export const LoginButton = styled.Button`
    font-size: 20px;
    color: #757575;
    border-radius: 8px;
    background-color: #0A0A0A;
`;

export const SmallText = styled.TouchableOpacity`
    font-size: 20px;
    color: #757575;
`;