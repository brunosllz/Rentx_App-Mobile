import React from 'react';
import {
    Container,
} from './styles';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Feather } from '@expo/vector-icons';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
}

export function Input({ iconName }: Props) {
    const theme = useTheme();
    return (
        <Container>
            <Feather
                name={iconName}
                size={24}
                color={theme.COLORS.text_detail}
            />



        </Container>
    );
}