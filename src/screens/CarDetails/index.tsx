import React, { useMemo } from 'react';
import {
    Container,
    Header,
    ImageSliderWrapper,
    Content,
    Details,
    Description,
    Brand,
    Model,
    Rent,
    Period,
    Price,
    AcessoryWrapper,
    About,
    Footer
} from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native';

import { CarDTO } from '../../dtos/CarDTO';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ForceSvg from '../../assets/force.svg';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { CarAcessory } from '../../components/CarAcessory';
import { Button } from '../../components/Button';

interface Params {
    car: CarDTO
}

export function CarDetails() {
    const navigation = useNavigation<any>();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleScheduling() {
        navigation.navigate({ name: 'Scheduling' });
    }

    function handleBack() {
        navigation.goBack()
    }

    return (
        <Container>
            <StatusBar style='dark' translucent={true} />

            <Header>
                <BackButton
                    onPress={handleBack}
                    color='gray'
                />
            </Header>

            <ImageSliderWrapper>
                <ImageSlider
                    imageUrl={car.photos}
                />
            </ImageSliderWrapper>

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Model>{car.name}</Model>
                    </Description>

                    <Rent>
                        <Period>
                            ao dia
                        </Period>
                        <Price>
                            R$ {car.rent.price}
                        </Price>
                    </Rent>
                </Details>

                <AcessoryWrapper>
                    <CarAcessory name='380km/h' icon={SpeedSvg} />
                    <CarAcessory name='3.2s' icon={AccelerationSvg} />
                    <CarAcessory name='800 HP' icon={ForceSvg} />
                    <CarAcessory name='Gasolina' icon={GasolineSvg} />
                    <CarAcessory name='Auto' icon={ExchangeSvg} />
                    <CarAcessory name='2 pessoas' icon={PeopleSvg} />
                </AcessoryWrapper>

                <About>
                    {car.about}
                </About>
            </Content>

            <Footer>
                <Button
                    title='Escolher período do aluguel'
                    onPress={handleScheduling}
                />
            </Footer>
        </Container>
    );
}