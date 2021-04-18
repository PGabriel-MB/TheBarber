import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

import {
    Container,
    Scroller,
    
    HeaderArea,
    HeaderTitle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,
    LoadingIcon
} from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { UserService } from "../../api/services/UserService";


const Home: React.FC = () => {
    const navigation = useNavigation();
    const userService = new UserService();

    const [permission, askPermission] = Permissions.usePermissions(Permissions.LOCATION, { ask: true });
    
    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState({});
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    
    const handleLocationFinder = async () => {
        await askPermission();

        if(permission?.status === 'granted') {
            setLoading(true);
            setLocationText('');
            setList([]);

            setCoords({});
            let location = await Location.getCurrentPositionAsync({});
            setCoords(location.coords);
            getBarbers();
        }
    }

    const getBarbers = async () => {
        await userService.getUsers()
            .then(async res => {
                const users = await res.data.users;
                setList(users);
                console.log(list);
            });
    }

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
                    <LocationInput 
                        placeholderTextColor="#AAAAAA"
                        placeholder="Onde você está?" 
                        value={locationText}
                        onChangeText={(t) => setLocationText(t)}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <FontAwesomeIcon icon={ faMapMarkerAlt } size={24} style={{ color: '#AAAAAA' }}  />
                    </LocationFinder>
                </LocationArea>

                {loading &&
                <LoadingIcon size="large" color="#757575" />}
            </Scroller>
        </Container>
    )

}
export default Home;