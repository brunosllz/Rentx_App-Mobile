import React, { useEffect, useState } from 'react';
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
    AccessoryWrapper,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceInfo,
    RentalPriceLabel,
    RentalPriceQuota,
    RentalPriceTotal
} from './styles';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

import { getAcessoryIcon } from '../../utils/getAccessoryIcon';
import { CarDTO } from '../../dtos/CarDTO';
import { getUtfDate } from '../../components/Calendar/getUtfDate';

import { Feather } from '@expo/vector-icons';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { CarAccessory } from '../../components/CarAccessory';
import { Button } from '../../components/Button';

interface Params {
    car: CarDTO;
    dates: string[];
}
interface RentalPeriod {
    start: string;
    end: string;
}

export function SchedulingDetails() {
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
    const theme = useTheme();
    const navigation = useNavigation<any>()
    const route = useRoute();
    const { car, dates } = route.params as Params;

    function handleSchedulingComplete() {
        navigation.navigate({ name: 'SchedulingComplete' });
    }

    function handleBack() {
        navigation.goBack()
    }

    useEffect(() => {
        setRentalPeriod({
            start: format(getUtfDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end: format(getUtfDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
        })
    }, [])


    return (
        <Container>
            <StatusBar style='dark' translucent={true} />

            <Header>
                <BackButton
                    color='gray'
                    onPress={handleBack}
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

                <AccessoryWrapper>
                    {
                        car.accessories.map(acessory => (
                            <CarAccessory
                                key={acessory.type}
                                name={acessory.name}
                                icon={getAcessoryIcon(acessory.type)}
                            />
                        ))
                    }
                </AccessoryWrapper>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            size={RFValue(24)}
                            color={theme.COLORS.background_secondary}
                            name='calendar'
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>{rentalPeriod.start}</DateValue>
                    </DateInfo>

                    <Feather
                        size={RFValue(15)}
                        color={theme.COLORS.text_detail}
                        name='chevron-right'
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>{rentalPeriod.end}</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceInfo>
                        <RentalPriceLabel>TOTAL</RentalPriceLabel>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                    </RentalPriceInfo>

                    <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                </RentalPrice>
            </Content>

            <Footer>
                <Button
                    title='Alugar agora'
                    color='green'
                    onPress={handleSchedulingComplete}
                />
            </Footer>
        </Container>
    );
}