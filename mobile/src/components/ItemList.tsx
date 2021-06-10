import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Buttom = styled.TouchableOpacity`
    padding: 10px;
    flex-direction: row;
    justfy-content: space-between;
`;

const Text = styled.Text`
    color: #0A0A0A;
    font-size: 14px;
    padding-left: 20px;
`;

export interface ItemListProps {
    onPress(): void,
    description: string
}

export const ItemList = (props: ItemListProps) => {
    return (
        <Buttom onPress={props.onPress}>
            <Text>{props.description}</Text>
            <FontAwesomeIcon icon={faChevronRight} size={100} />
        </Buttom>
    );
} 