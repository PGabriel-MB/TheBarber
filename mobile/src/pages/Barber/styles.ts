import { exp } from "react-native-reanimated";
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
    height: 240px;
    width: 100%;
`;

export const PageBody = styled.View`
    background-color: #ffffff;
    border-top-left-radius: 50px;
    margin-top: -50px;
    min-height: 400px;
    min-width: 400px;
`;

export const UserInfoArea = styled.View`
    flex-direction: row;
`;

export const UserAvatar = styled.Text`
    font-size: 50px;
    color: red;
    background-color: #d4d1c9;
    border-radius: 20px;
    padding: 10px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #ffffff;
    box-shadow: 3px 7px 10px 3px black;
`;

export const UserInfo = styled.View``;

export const UserInfoName = styled.Text``;

export const UserFavButton = styled.TouchableOpacity``;

export const ServiceArea = styled.View``;

export const TestimonialArea = styled.View``;