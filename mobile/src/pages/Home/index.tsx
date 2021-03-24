import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    Scroller,
    
    HeaderArea,
    HeaderTitle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder
} from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Home: React.FC = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>
                        Encontre o seu barbeiro favorito!
                    </HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <FontAwesomeIcon icon={ faSearch } size={26} style={{ color: "#AAAAAA" }} />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput />
                    <LocationFinder>
                        <FontAwesomeIcon icon={ faMapMarkerAlt } size={24} style={{ color: '#AAAAAA' }}  />
                    </LocationFinder>
                </LocationArea>
            </Scroller>
        </Container>
    )

}
export default Home;