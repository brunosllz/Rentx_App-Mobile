import React from 'react';
import {
    Container,
    Header,
    ImageSliderWrapperAnimated,
    ContentAnimated,
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

import {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    Extrapolate
} from 'react-native-reanimated'

import { CarDTO } from '../../dtos/CarDTO';
import { getAcessoryIcon } from '../../utils/getAccessoryIcon';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { CarAccessory } from '../../components/CarAccessory';
import { Button } from '../../components/Button';

interface Params {
    car: CarDTO
}

interface NavigationProps {
    goBack: () => void;
    navigate: (
        screen: string,
        carObject: {
            car: CarDTO,
        }
    ) => void;
}

export function CarDetails() {
    const navigation = useNavigation<NavigationProps>();
    const route = useRoute();
    const { car } = route.params as Params;

    const translateY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            translateY.value = event.contentOffset.y;
        }
    });

    const imageStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(
                translateY.value,
                [0, 200],
                [200, 90],
                Extrapolate.CLAMP
            )
        }
    })

    function handleScheduling() {
        navigation.navigate('Scheduling', { car });
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

            <ImageSliderWrapperAnimated style={imageStyle}>
                <ImageSlider
                    photos={car.photos}
                    translate={translateY}
                />
            </ImageSliderWrapperAnimated>

            <ContentAnimated
                onScroll={scrollHandler}
                scrollEventThrottle={16}
            >
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Model>{car.name}</Model>
                    </Description>

                    <Rent>
                        <Period>
                            {car.period}
                        </Period>
                        <Price>
                            R$ {car.price}
                        </Price>
                    </Rent>
                </Details>

                <AcessoryWrapper>
                    {
                        car.accessories.map(acessory => (
                            <CarAccessory
                                key={acessory.id}
                                name={acessory.name}
                                icon={getAcessoryIcon(acessory.type)}
                            />
                        ))
                    }
                </AcessoryWrapper>

                <About>
                    {car.about}
                </About>
            </ContentAnimated>

            <Footer>
                <Button
                    title='Escolher período do aluguel'
                    onPress={handleScheduling}
                />
            </Footer>
        </Container>
    );
}