import React, { useState, useEffect } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {
    Container,
    TextLogo,
    Scroller,
    FakeSwiper,
    PageBody,
    UserInfoArea,
    UserAvatar,
    UserInfo,
    UserInfoName,
    UserFavButton,
    ServiceArea
} from "./styles";

import { UserService } from "../../api/services/UserService";
import { Service } from "../../api/models/interfaces/Service";
import { Star } from "../../components/Stars";


interface iState {
    _id: string,
    name: string,
    stars: number,
    services: Array<Service>
    phones: Array<any>
}

type BarberRouteProp = {
    Barber: {
        id: string,
        name: string,
        stars: number
    }
}

const Barber: React.FunctionComponent = () => {
    const request = new UserService();
    const navigation = useNavigation();
    const route = useRoute<RouteProp<BarberRouteProp, 'Barber'>>();

    const [userInfo, setUserInfo] = useState<iState>({
        _id: route.params.id,
        name: route.params.name,
        stars: route.params.stars || 0,
        phones: [],
        services: []
    });
    const [loading, setLoading] = useState<boolean>(false)
    
    const getBarberInfo = () => {
        setLoading(true);
        request.getUserWithFullDataById(userInfo._id)
            .then(async res => {
                setUserInfo({...await res.data.user, services: res.data.services});
                console.log(await userInfo)
            })
            .catch(async err => {
                console.log(await err)
                alert('Houve algum erro na obtenção dos dados!');
            }).finally(() => setLoading(false));
    }

    useEffect(() => {
        getBarberInfo();
    },[]);

    return (
        <Container>
            <Scroller>
                <FakeSwiper></FakeSwiper>
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar></UserAvatar>
                        <UserInfo>
                            <UserInfoName>{userInfo.name[0]+ userInfo.name[1]}</UserInfoName>
                            <Star ranking={userInfo.stars} showRankingNumber={true} />
                        </UserInfo>
                        <UserFavButton>
                            <FontAwesomeIcon icon={faHeart} size={18} style={{color: '#FF0000'}} />
                        </UserFavButton>
                    </UserInfoArea>
                    <ServiceArea>

                    </ServiceArea>
                </PageBody>
            </Scroller>
        </Container>
    )
}
export default Barber;