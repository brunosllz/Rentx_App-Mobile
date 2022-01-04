import React, { useEffect, useState } from 'react';
import {
    Container,
    CarList,
    CarWrapper,
    WrapperMyCarButtonAnimated,
    MyCarButtonAnimated,
    Icon
} from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring
} from 'react-native-reanimated';

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

    const positionX = useSharedValue(0);
    const positionY = useSharedValue(0);

    const onGestureEvent = useAnimatedGestureHandler({
        onStart(_, ctx: any) {
            ctx.positionX = positionX.value;
            ctx.positionY = positionY.value;
        },

        onActive(event, ctx: any) {
            positionX.value = ctx.positionX + event.translationX;
            positionY.value = ctx.positionY + event.translationY;
        },

        onEnd() {
            positionX.value = withSpring(0);
            positionY.value = withSpring(0);
        }
    });

    const myCarButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: positionX.value },
                { translateY: positionY.value }
            ]
        }
    })

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

            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <WrapperMyCarButtonAnimated style={myCarButtonStyle}>
                    <MyCarButtonAnimated onPress={handleMycar}>
                        <Icon
                            name='car-sport'
                            size={32}
                        />
                    </MyCarButtonAnimated>
                </WrapperMyCarButtonAnimated>
            </PanGestureHandler>
        </Container>
    );
}