import React, { useState, useEffect } from "react";
import { RefreshControl } from "react-native";
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
    LoadingIcon,

    ListArea
} from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { UserService } from "../../api/services/UserService";
import { BarberItemUser } from "../../components/BarberItemUser";
import { User } from "../../api/models/interfaces/User";


const Home: React.FC = () => {
    const navigation = useNavigation();
    const userService = new UserService();

    const [permission, askPermission] = Permissions.usePermissions(Permissions.LOCATION, { ask: true });
    
    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState({});
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<User[]>([]);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    
    const handleLocationFinder = async () => {
        await askPermission();

        if(permission?.status === 'granted') {
            setLoading(true);
            setLocationText('');

            setCoords({});
            let location = await Location.getCurrentPositionAsync({});
            setCoords(location.coords);
            getBarbers();
        }
    }

    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        await userService.getUsers()
            .then(async res => {
                const users = await res.data.users;
                const newUsers: User[] = [];
                users.map((user: User) => (newUsers.push(user)));
                setList(users);
            }).catch(err => console.log('Data recovery error', err));

        setLoading(false);
    }

    useEffect(() => {
        getBarbers();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getBarbers();
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
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
                        placeholder="Onde voc?? est???" 
                        value={locationText}
                        onChangeText={(t) => setLocationText(t)}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <FontAwesomeIcon icon={ faMapMarkerAlt } size={24} style={{ color: '#AAAAAA' }}  />
                    </LocationFinder>
                </LocationArea>

                {loading &&
                <LoadingIcon size="large" color="#757575" />}

                <ListArea>
                    {list.map((item: User, key) => (
                        <BarberItemUser key={key} {...item}  />
                    ))}
                </ListArea>
            </Scroller>
        </Container>
    )

}
export default Home;