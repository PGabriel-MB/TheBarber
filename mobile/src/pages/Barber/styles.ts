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
    min-height: 400px;
`;

export const PageBody = styled.View`
    background-color: #ffffff;
    border-top-left-radius: 50px;
    margin-top: -50px;
`;

export const UserInfoArea = styled.View``;

export const UserAvatar = styled.Text`
    font-size: 30px;
    color: red;
`;

export const UserInfo = styled.View``;

export const UserInfoName = styled.Text``;

export const UserFavButton = styled.TouchableOpacity``;

export const ServiceArea = styled.View``;

export const TestimonialArea = styled.View``;