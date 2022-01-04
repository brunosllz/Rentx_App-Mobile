import React from 'react';
import {
    Container,
    Icon
} from './styles';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

interface Props extends BorderlessButtonProps {
    color: 'gray' | 'white';
}

export function BackButton({ color, ...rest }: Props) {
    return (
        <Container {...rest} >
            <Icon
                name="chevron-left"
                color={color}
            />
        </Container>
    );
}