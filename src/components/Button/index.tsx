import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Title
} from './styles';

interface Props extends RectButtonProps {
    title: string;
    enable?: boolean;
    color?: 'green' | 'red';
}

export function Button({
    title,
    color = 'red',
    enable = true,
    ...rest
}: Props) {

    return (
        <Container
            enabled={enable}
            color={color}
            style={enable ? { opacity: 1 } : { opacity: .5 }}
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    );
}