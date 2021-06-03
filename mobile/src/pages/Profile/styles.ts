import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #1C1C1C;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TextLogo = styled.Text`
    color: #fff;
    font-style: italic;
    font-size: 40px
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const FakeSwiper = styled.View`
    flex: 1;
    background-color: #1C1C1C;
    height: 200px;
    width: 100%;
`;

export const PageBody = styled.View`
    background-color: #ffffff;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin-top: -50px;
    min-height: 490px;
    min-width: 100%;
`;

export const UserInfoArea = styled.View`
    display: flex;
    align-items: center;
    margin-top: -45px;
`;

export const UserAvatar = styled.Text`
    font-size: 50px;
    color: red;
    background-color: #d4d1c9;
    border-radius: 20px;
    width: 90px;
    height: 90px;
    padding: 10px;
    border-width: 4px;
    border-color: #ffffff;
`;

export const UserInfo = styled.View`
    margin-top: 60px;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;

export const UserInfoName = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 3px;
`;

export const UserInfoEmail = styled.Text`
    color: #757575;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const OptionsArea = styled.View``;

export const TestimonialArea = styled.View``;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 15px;
    top: 35px;
    z-index: 9;
`;