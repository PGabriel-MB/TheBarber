import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native'

import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {

    let [ai, setAi] = useState(true);

    let changePage = () => {
        setTimeout(() => {
            setAi(false);
            return <AuthRoutes />
        }, 5000)
    }

    return <ActivityIndicator onLayout={changePage} animating={ai} size="large" color="#757575" />
}

export default Routes;