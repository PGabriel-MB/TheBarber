import React from 'react';
import style from 'styled-components/native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const ButtonSpace = style.TouchableOpacity``;

const Label = style.Text``;

interface NPBProps {
    page: string,
    label: string,
    userId: string | number
}

export const NextPageButton = (props: NPBProps) => {
    const navigation = useNavigation();

    const goToPage = () => {
        navigation.navigate(
            props.page,
            { userId: props.userId }
        );
    }

    return (
        <ButtonSpace onPress={() => goToPage()}>
            <Label>{props.label}</Label>
        </ButtonSpace>
    )
}
