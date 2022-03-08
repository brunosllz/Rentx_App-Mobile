import React, { useEffect, useState } from 'react';
import {
    Container,
    CarList,
    CarWrapper
} from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';
import { synchronize } from '@nozbe/watermelondb/sync'

import api from '../../service/api';
import { database } from '../../database';
import { Car as ModelCar } from '../../database/model/Car';
import { CarDTO } from '../../dtos/CarDTO';

import { CarCard } from '../../components/CarCard';
import { Header } from '../../components/Header';
import { LoadAnimation } from '../../components/LoadAnimation';
import { Alert } from 'react-native';

interface NavigationProps {
    navigate: (
        screen: string,
        carObject?: {
            car: ModelCar
        }
    ) => void;
}

export function Home() {
    const [cars, setcars] = useState<ModelCar[]>([]);
    const [loading, setloading] = useState(true);
    const navigation = useNavigation<NavigationProps>();
    const netInfo = useNetInfo();

    function handleCarDetails(car: ModelCar) {
        navigation.navigate('CarDetails', { car });
    };

    async function offilineSynchronize() {
        await synchronize({
            database,
            pullChanges: async ({ lastPulledAt }) => {
                const response = await api.get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);
                const { changes, latestVersion } = response.data;
                return { changes, timestamp: latestVersion };
            },
            pushChanges: async ({ changes }) => {
                const user = changes.user;
                await api.post('/users/async', user);
            }
        });
    }

    useEffect(() => {
        let isMounted = true;
        async function fetchCars() {
            try {
                const carCollection = await database.get<ModelCar>('cars');
                const cars = await carCollection.query().fetch();
                if (isMounted) {
                    setcars(cars);
                }
            } catch (error) {
                Alert.alert("Não foi possível carregar os carrros.");

                console.log(error);
            } finally {
                if (isMounted) {
                    setloading(false);
                }
            }
        }

        fetchCars();
        return () => {
            isMounted = false;
        }
    }, []);

    useEffect(() => {
        if (netInfo.isConnected === true) {
            offilineSynchronize();
        }
    }, [netInfo.isConnected])

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