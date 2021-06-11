import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FlatList } from "react-native";

import {
    Container,
    Scroller,
    FakeSwiper,
    PageBody,
    UserInfoArea,
    UserAvatar,
    UserInfo,
    UserInfoName,
    UserInfoEmail,
    OptionsArea,
    BackButton
} from "./styles";
import { useUser } from '../../contexts/UserContext'
import { ItemList, ItemListProps } from "../../components/ItemList";
import { useNavigation } from "@react-navigation/native";


const Profile: React.FunctionComponent = () => {
    const { state } = useUser();
    const { user } = state;
    const tempNameInitials: string = user.name[0] + user.name[1];
    const navigation = useNavigation();

    const handleBackButton = () => {
        
    }

    const DATA = [
        {
            key: 0,
            onPress() {
                // Screen to User data
                // navigation.navigate('')
            },
            description: 'Dados Pessoais'
        },
        {
            key: 1,
            onPress() {
                // Screen to User  Expenses
                // navigation.navigate('')
            },
            description: 'Gastos Realizados'
        },
        {
            key: 3,
            onPress() {
                // Screen to Barbershop data
                // navigation.navigate('') 
            },
            description: 'Dados da Barbearia'
        }
    ];

    return (
        <Container>
            <Scroller>
                <FakeSwiper />
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar>{tempNameInitials.toUpperCase()}</UserAvatar>
                        <UserInfo>
                            <UserInfoName>{user.name}</UserInfoName>
                            <UserInfoEmail>{user.email}</UserInfoEmail>
                        </UserInfo>
                    </UserInfoArea>
                    <OptionsArea>
                        {
                            DATA.map(item => <ItemList 
                                onPress={item.onPress}
                                description={item.description}
                                key={item.key}
                            />)
                        }
                    </OptionsArea>
                </PageBody>
            </Scroller>
            <BackButton onPress={handleBackButton}>
                <FontAwesomeIcon icon={faChevronLeft} size={25} style={{color: '#ffffff'}} />
            </BackButton>
        </Container>
    )
}
export default Profile;