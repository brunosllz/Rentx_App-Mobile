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
import { getAcessoryIcon } from '../../utils/getAccessoryIcon';

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
                            {car.rent.period}
                        </Period>
                        <Price>
                            R$ {car.rent.price}
                        </Price>
                    </Rent>
                </Details>

                <AcessoryWrapper>
                    {
                        car.accessories.map(acessory => (
                            <CarAcessory
                                key={acessory.type}
                                name={acessory.name}
                                icon={getAcessoryIcon(acessory.type)}
                            />
                        ))
                    }
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