import React, { useEffect, useState } from 'react';
import {
    Container,
    CarList,
    LoadWrapper,
    MyCarButton,
    Icon
} from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import api from '../../service/api';

import { CarDTO } from '../../dtos/CarDTO';

import { CarCard } from '../../components/CarCard';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';

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

    function handleMycar() {
        navigation.navigate('MyCar');
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

            <Header
                amountCar={cars.length}
            />
            {
                loading ?
                    <LoadWrapper>
                        <Load />
                    </LoadWrapper>
                    :
                    <CarList
                        data={cars}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <CarCard
                                data={item}
                                onPress={() => handleCarDetails(item)}
                            />
                        }
                        showsVerticalScrollIndicator={false}
                    />
            }

            <MyCarButton onPress={handleMycar}>
                <Icon name='car-sport' size={32} />
            </MyCarButton>
        </Container>
    );
}