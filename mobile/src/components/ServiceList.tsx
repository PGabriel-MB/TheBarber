import React from "react";
import styled from "styled-components/native";

import { ServiceItem, ServiceItemProps } from "./ServiceItem";

const ListScroll = styled.ScrollView`
    margin-top: 40px;
`;

interface ServiceListProp {
    serviceList: ServiceItemProps[]
}

export const ServiceList: React.FunctionComponent<ServiceListProp> = (props) => {
    return (
        <ListScroll>
            {props.serviceList.map((service, index) => <ServiceItem 
                {...service}
                key={index}
            />)}
        </ListScroll>
    );
}