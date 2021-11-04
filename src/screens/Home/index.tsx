import React from 'react';
import { CarCard } from '../../components/CarCard';

import { Header } from '../../components/Header';

import {
    Container
} from './styles';

export function Home() {
   return(
        <Container>
            <Header/>

            <CarCard/>
        </Container>
   );
}