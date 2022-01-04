import React from 'react';
import {
    Container,
    Title
} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Load } from '../Load';

interface Props extends RectButtonProps {
    title: string;
    enable?: boolean;
    loading?: boolean;
    color?: 'green' | 'red';
}

export function Button({
    title,
    color = 'red',
    enable = true,
    loading = false,
    ...rest
}: Props) {

    return (
        <Container
            enabled={enable}
            color={color}
            style={{ opacity: (enable) ? 1 : .5 }}
            {...rest}
        >
            {
                loading ?
                    <Load />
                    :
                    <Title>
                        {title}
                    </Title>
            }
        </Container>
    );
}