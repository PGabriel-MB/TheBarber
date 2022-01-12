import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #ffffff;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const UserInfo = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: end;
`;

export const UserInfoTitle = styled.Text`
    color: #000000;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: left;
`;

export const UserAvatar = styled.Text`
    font-size: 50px;
    color: red;
    background-color: #d4d1c9;
    border-radius: 20px;
    padding: 10px;
    margin-left: 10px;
    border-width: 4px;
    border-color: #ffffff;
`;