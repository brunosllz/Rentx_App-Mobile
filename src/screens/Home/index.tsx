import React from 'react';
import {
    Container,
    CarList
} from './styles';
import { StatusBar } from 'expo-status-bar';

import { CarCard } from '../../components/CarCard';
import { Header } from '../../components/Header';

export function Home() {
    const carData = {
        brand: "porsche",
        name: "Panamera",
        rent: {
            period: "ao dia",
            price: 120
        },
        thumbnail: 'https://e7.pngegg.com/pngimages/464/370/png-clipart-porsche-porsche.png'
    }

    return (
        <Container>
            <StatusBar style='light' translucent={true} />

            <Header />

            <CarList
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={item => String(item)}
                renderItem={item =>
                    <CarCard
                        data={carData}
                    />
                }
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}