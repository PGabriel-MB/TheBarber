import React from  'react';
import styled from "styled-components/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
    faStar,
    faStarHalfAlt,
    faStarAndCrescent
} from '@fortawesome/free-solid-svg-icons';

export const StarArea = styled.View`
    flex-direction: row;

`;

interface StarProps {
    showRankingNumber: boolean,
    ranking: number
}

export const Star = (props: StarProps) => {

    return (
        <StarArea>

        </StarArea>
    );
}