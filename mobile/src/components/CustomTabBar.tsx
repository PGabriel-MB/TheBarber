import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";


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

const CustomMainTab: React.FC = ({ navigation: useNavigation() }) => {

    const goTo = (route: string) => {
        navigation.navigate(route);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <Text style={{ color: '#ffffff' }}>H</Text>
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <Text style={{ color: '#ffffff' }}>S</Text>
            </TabItem>
            <TabItem onPress={() => goTo('Appointments')}>
                <Text style={{ color: '#ffffff' }}>A</Text>
            </TabItem>
            <TabItem onPress={() => goTo('Favorite')}>
                <Text style={{ color: '#ffffff' }}>F</Text>
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                <Text style={{ color: '#ffffff' }}>P</Text>
            </TabItem>
        </TabArea>
    );
}

export default CustomMainTab;