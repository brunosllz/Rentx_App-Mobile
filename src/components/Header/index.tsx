import React from 'react';
import {
    Container,
    TotalCars,
    HeaderContent
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoSvg from '../../assets/logo.svg';

interface Props {
    amountCar: number;
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
                    {
                        amountCar > 1 ?
                            `Total de ${amountCar} carros`
                            :
                            `Total de ${amountCar} carro`
                    }
                </TotalCars>
            </HeaderContent>
        </Container>
    );
}