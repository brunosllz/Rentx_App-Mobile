import React from 'react';
import { BackButton } from '../../components/BackButton';


import {
    Container,
    Header
} from './styles';

interface Props {
    colorIcon: 'gray' | 'white';
}

export function CarDetails() {
   return(
        <Container>
            <Header>
                <BackButton
                    color='gray'
                />
            </Header>
        </Container>
   );
}