import React, { useState } from 'react';
import {
    Container,
    WrapperIcon,
    InputText,
    WhapperIconPasswd,
    ChangePasswdButton
} from './styles';
import { TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function PasswdInput({ iconName, value, ...rest }: Props) {
    const [hidePasswd, setHidePasswd] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const theme = useTheme();

    function handleHidePasswd() {
        setHidePasswd(!hidePasswd);
    }

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
                secureTextEntry={hidePasswd}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
            />

            <WhapperIconPasswd>
                <ChangePasswdButton onPress={handleHidePasswd}>
                    <Feather
                        name={hidePasswd ? 'eye' : 'eye-off'}
                        size={RFValue(24)}
                        color={theme.COLORS.text}
                    />
                </ChangePasswdButton>
            </WhapperIconPasswd>
        </Container>
    );
}