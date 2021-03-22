import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";


const TabArea = styled.View`
    height: 71px;
    background-color: #0A0A0A;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 35px;
    border: 3px solid #0A0A0A;
    margin-top: -25px;
`;


const CustomMainTab = (props: BottomTabBarProps): React.ReactElement => {

    const goTo = (route: string) => {
        props.navigation.navigate(route);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <Text style={{ color: '#ffffff', opacity: props.state.index === 0 ? 1 : 0.5 }}>H</Text>
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <Text style={{ color: '#ffffff', opacity: props.state.index === 1 ? 1 : 0.5 }}>S</Text>
            </TabItem>
            <TabItemCenter onPress={() => goTo('Appointments')}>
                <Text style={{ color: '#0A0A0A'}}>A</Text>
            </TabItemCenter>
            <TabItem onPress={() => goTo('Favorites')}>
                <Text style={{ color: '#ffffff', opacity: props.state.index === 3 ? 1 : 0.5 }}>F</Text>
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                <Text style={{ color: '#ffffff', opacity: props.state.index === 4 ? 1 : 0.5 }}>P</Text>
            </TabItem>
        </TabArea>
    );
}

export default CustomMainTab;