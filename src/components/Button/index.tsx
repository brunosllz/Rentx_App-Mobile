import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Title
} from './styles';

interface Props extends RectButtonProps {
    title: string;
    color?: 'green' | 'red';
}

export function Button({
    title,
    color = 'red',
    ...rest
}: Props) {

    return (
        <Container
            color={color}
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    );
}