import React from 'react';
import {
    Container,
    TotalCars,
    HeaderContent
} from './styles';

import { RFValue } from 'react-native-responsive-fontsize';

import LogoSvg from '../../assets/logo.svg';

export function Header() {
   return(
        <Container>
            <HeaderContent>
                <LogoSvg 
                    width={RFValue(108)} 
                    height={RFValue(12)}
                />

                <TotalCars>
                    Total de 12 carros
                </TotalCars>
            </HeaderContent>
        </Container>
   );
}