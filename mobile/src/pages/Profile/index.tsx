import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


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
import {useUser} from '../../contexts/UserContext'

const Profile: React.FunctionComponent = () => {
    const { state } = useUser();

    const handleBackButton = () => {
        console.log(state)
    }

    return (
        <Container>
            <Scroller>
                <FakeSwiper />
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar>NO</UserAvatar>
                        <UserInfo>
                            <UserInfoName>Joseph Climber</UserInfoName>
                            <UserInfoEmail>josephClimber@gmail.com</UserInfoEmail>
                        </UserInfo>
                    </UserInfoArea>
                    <OptionsArea>

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