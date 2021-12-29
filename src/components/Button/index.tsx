import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
    Container,
    Title
} from './styles';

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
    const theme = useTheme();

    return (
        <Container
            enabled={enable}
            color={color}
            style={{ opacity: (enable) ? 1 : .5 }}
            {...rest}
        >
            {
                loading ?
                    <ActivityIndicator
                        size={24}
                        color={theme.COLORS.background_secondary}
                    />
                    :
                    <Title>
                        {title}
                    </Title>
            }
        </Container>
    );
}