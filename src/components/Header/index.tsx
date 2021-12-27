import React from 'react';
import {
    Container,
    TotalCars,
    HeaderContent
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoSvg from '../../assets/logo.svg';

interface Props {
    amountCar?: number;
}

export function Header({ amountCar }: Props) {
    return (
        <Container>
            <HeaderContent>
                <LogoSvg
                    width={RFValue(108)}
                    height={RFValue(12)}
                />

                <TotalCars>
                    Total de {amountCar} carros
                </TotalCars>
            </HeaderContent>
        </Container>
    );
}