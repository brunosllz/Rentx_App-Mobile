import React, { useEffect, useState } from 'react';
import {
    Container,
    CarList,
    CarWrapper
} from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import api from '../../service/api';
import { CarDTO } from '../../dtos/CarDTO';

import { CarCard } from '../../components/CarCard';
import { Header } from '../../components/Header';
import { LoadAnimation } from '../../components/LoadAnimation';
import { Alert } from 'react-native';

interface NavigationProps {
    navigate: (
        screen: string,
        carObject?: {
            car: CarDTO
        }
    ) => void;
}

export function Home() {
    const [cars, setcars] = useState<CarDTO[]>([]);
    const [loading, setloading] = useState(true);
    const navigation = useNavigation<NavigationProps>();

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car });
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                setcars(response.data);

                setloading(false);
            } catch (error) {
                Alert.alert("Não foi possível carregar os carrros.");

                console.log(error);
            }
        }

        fetchCars();
    }, []);

    return (
        <Container>
            <StatusBar style='light' translucent={true} />

            <Header amountCar={cars.length} />

            {
                loading ?
                    <LoadAnimation />
                    :
                    <CarList
                        data={cars}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <CarWrapper>
                                <CarCard
                                    data={item}
                                    onPress={() => handleCarDetails(item)}
                                />
                            </CarWrapper>
                        }
                    />
            }
        </Container>
    );
}