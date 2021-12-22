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
import { CarDTO } from '../../dtos/CarDTO';

export function Home() {
    const [cars, setcars] = useState<CarDTO[]>([]);
    const [loading, setloading] = useState(true);
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
                setcars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setloading(false);
            }
        }

        fetchCars();
    }, [])

    return (
        <Container>
            <StatusBar style='light' translucent={true} />

            <Header />

            <CarList
                data={cars}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <CarCard
                        data={item}
                        onPress={handleCarDetails}
                    />
                }
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}