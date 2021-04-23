import React from  'react';
import styled from "styled-components/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
    faStar,
    faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';

const StarArea = styled.View`
    flex-direction: row;
`;

const StarView = styled.View``;

interface StarProps {
    showRankingNumber: boolean,
    ranking: number
}

export const Star = (props: StarProps) => {
    let s = [2, 2, 2, 2, 1];

    return (
        <StarArea>
            {
                s.map((item, k) => (
                    <StarView key={k}>
                        {item === 1 && <FontAwesomeIcon icon={faStarHalfAlt} size={18} style={{ color: "#FF9200"}} />}
                        {item === 2 && <FontAwesomeIcon icon={faStar} size={18} style={{ color: "#FF9200"}} />}
                    </StarView>
                ))
            }
        </StarArea>
    );
}