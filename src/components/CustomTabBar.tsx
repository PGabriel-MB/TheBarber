import React from "react";
import styled from "styled-components/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
    faHome,
    faSearch,
    faCalendarAlt,
    faHeart,
    faUserCircle
} from '@fortawesome/free-solid-svg-icons';


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
                <FontAwesomeIcon icon={ faHome } size={ 27 } style={{ color: '#ffffff', opacity: props.state.index === 0 ? 1 : 0.8 }} />
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <FontAwesomeIcon icon={ faSearch } size={ 27 } style={{ color: '#ffffff', opacity: props.state.index === 1 ? 1 : 0.8 }} />
            </TabItem>
            <TabItemCenter onPress={() => goTo('Appointments')}>
                <FontAwesomeIcon icon={ faCalendarAlt } size={ 27 } style={{ color: '#000000' }} />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Favorites')}>
                <FontAwesomeIcon icon={ faHeart } size={ 27 } style={{ color: '#ffffff', opacity: props.state.index === 3 ? 1 : 0.8 }} />
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                <FontAwesomeIcon icon={ faUserCircle } size={ 27 } style={{ color: '#ffffff', opacity: props.state.index === 4 ? 1 : 0.8 }} />
            </TabItem>
        </TabArea>
    );
}

export default CustomMainTab;