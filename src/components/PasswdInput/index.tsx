import React, { useState } from 'react';
import {
    Container,
    WrapperIcon,
    Icon,
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
}

export function PasswdInput({ iconName, ...rest }: Props) {
    const theme = useTheme();
    const [hidePasswd, setHidePasswd] = useState(true);

    function handleHidePasswd() {
        setHidePasswd(!hidePasswd);
    }

    return (
        <Container>
            <WrapperIcon>
                <Icon
                    name={iconName}
                    size={RFValue(24)}
                />
            </WrapperIcon>

            <InputText
                secureTextEntry={hidePasswd}
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