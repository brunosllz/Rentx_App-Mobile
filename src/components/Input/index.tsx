import React, { useState } from 'react';
import {
    Container,
    WrapperIcon,
    InputText,
} from './styles';
import { TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Feather } from '@expo/vector-icons';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function Input({ iconName, value, ...rest }: Props) {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const theme = useTheme();

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value);
    }

    return (
        <Container
            isFocused={isFocused}
        >
            <WrapperIcon>
                <Feather
                    name={iconName}
                    size={RFValue(24)}
                    color={(isFocused || isFilled) ? theme.COLORS.primary : theme.COLORS.text}
                />

            </WrapperIcon>

            <InputText
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
            />
        </Container>
    );
}