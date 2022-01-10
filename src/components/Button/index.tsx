import React from 'react';
import {
    Container,
    Title
} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Load } from '../Load';

interface Props extends RectButtonProps {
    title: string;
    loading?: boolean;
    color?: 'green' | 'red' | 'white';
}

export function Button({
    title,
    color = 'red',
    enabled = true,
    loading = false,
    ...rest
}: Props) {

    return (
        <Container
            enabled={enabled}
            color={color}
            style={{ opacity: (enabled) ? 1 : .5 }}
            {...rest}
        >
            {
                loading ?
                    <Load />
                    :
                    <Title color={color}>
                        {title}
                    </Title>
            }
        </Container>
    );
}