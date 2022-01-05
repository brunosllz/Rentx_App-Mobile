import React from 'react';
import {
    Container,
    WrapperIcon,
    Icon,
    InputText,
} from './styles';
import { TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
}

export function Input({ iconName, ...rest }: Props) {

    return (
        <Container>
            <WrapperIcon>
                <Icon
                    name={iconName}
                    size={RFValue(24)}
                />

            </WrapperIcon>

            <InputText
                {...rest}
            />
        </Container>
    );
}