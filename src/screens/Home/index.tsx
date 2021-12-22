import React, { useEffect, useState } from 'react';
import {
    Container,
    CarList
} from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import api from '../../service/api';

import { CarCard } from '../../components/CarCard';
import { Header } from '../../components/Header';

export function Home() {
    const [cars, setcars] = useState();
    const navigation = useNavigation<any>();

    const carData = {
        brand: "porsche",
        name: "Panamera",
        rent: {
            period: "ao dia",
            price: 120
        },
        thumbnail: 'https://e7.pngegg.com/pngimages/464/370/png-clipart-porsche-porsche.png'
    }

    function handleCarDetails() {
        navigation.navigate({ name: 'CarDetails' });
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');

                !response ? [] : setcars(response.data);

                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCars();
    }, [])

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
                        onPress={handleCarDetails}
                    />
                }
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}