import React from 'react'
import { View } from 'react-native';
import styled from 'styled-components/native'

const Input = styled.TextInput`
    border-radius: 8px;
    padding: 15px;
    background-color: #EBEBEB;
    margin-bottom: 15px;
`;

const Label = styled.Text`
    margin-bottom: 5px;
    font-weight: bold;
`;

interface InputProps {
    label?: string | '',
    value: string | number,
    placeholder: string,
    setValue: (value: string) => void,
    inputMode?: string | 'default',
    styles?: {}
}

export const InputComp = (props: InputProps) => {
    return (
        <View {...props.styles}>
            <Label>{props.label}</Label>
            <Input
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={e => props.setValue(e)}
            />
        </View>
    )
}