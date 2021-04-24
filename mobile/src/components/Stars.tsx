import React from  'react';
import styled from "styled-components/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
    faStar,
    faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';

import { faStar as fullStar }  from "@fortawesome/free-regular-svg-icons";

const StarArea = styled.View`
    flex-direction: row;
`;

const StarView = styled.View``;

const StarText = styled.Text`
    font-size: 13px;
    font-weight: bold;
    margin-left: 5px;
    color: #AAAAAA;
`;

interface StarProps {
    showRankingNumber: boolean,
    ranking: number
}

export const Star = (props: StarProps) => {
    let s = [0, 0, 0, 0, 0];
    let floor = Math.floor(props.ranking);
    let left = props.ranking - floor;

    for(var i = 0; i < floor; i++){
        s[i] = 2;
    }

    if(left > 0) {
        s[i] = 1;
    }

    return (
        <StarArea>
            {
                s.map((item, k) => (
                    <StarView key={k}>
                        {item === 0 && <FontAwesomeIcon icon={fullStar} size={18} style={{ color: "#FF9200"}} />}
                        {item === 1 && <FontAwesomeIcon icon={faStarHalfAlt} size={18} style={{ color: "#FF9200"}} />}
                        {item === 2 && <FontAwesomeIcon icon={faStar} size={18} style={{ color: "#FF9200"}} />}
                    </StarView>
                ))
            }
            {props.showRankingNumber && <StarText>{props.ranking}</StarText>}
        </StarArea>
    );
}