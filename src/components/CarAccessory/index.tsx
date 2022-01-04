import React from 'react';
import {
    Container,
    Name
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

import { SvgProps } from 'react-native-svg';

interface Props {
    name: string;
    icon: React.FC<SvgProps>
}

export function CarAccessory({ name, icon: Icon }: Props) {
    return (
        <Container>
            <Icon width={RFValue(32)} height={RFValue(32)} />
            <Name>
                {name}
            </Name>
        </Container>
    );
}