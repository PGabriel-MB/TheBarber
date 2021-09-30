import React, { FC } from "react";
import { useNavigation } from '@react-navigation/native'

import {
    Container,
    Header,
    UserInfo,
    UserInfoTitle,
    UserAvatar
} from "./styles";

import { UserService } from "../../api/services/UserService";


const PersonalData: FC = () => {
    const request = new UserService();

    return (
        <></>
    )
}

export default PersonalData;