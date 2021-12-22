import React from 'react';
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
import { useNavigation } from '@react-navigation/native';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ForceSvg from '../../assets/force.svg';

import { Feather } from '@expo/vector-icons';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { CarAcessory } from '../../components/CarAcessory';
import { Button } from '../../components/Button';

interface Props {

}

export function SchedulingDetails() {
    const theme = useTheme();
    const navigation = useNavigation<any>()

    function handleSchedulingComplete() {
        navigation.navigate({ name: 'SchedulingComplete' });
    }

    return (
        <Container>
            <StatusBar style='dark' translucent={true} />

            <Header>
                <BackButton
                    onPress={() => { }}
                    color='gray'
                />
            </Header>

            <ImageSliderWrapper>
                <ImageSlider
                    imageUrl={['https://e7.pngegg.com/pngimages/464/370/png-clipart-porsche-porsche.png']}
                />
            </ImageSliderWrapper>

            <Content>
                <Details>
                    <Description>
                        <Brand>lamborghini</Brand>
                        <Model>Huracan</Model>
                    </Description>

                    <Rent>
                        <Period>
                            ao dia
                        </Period>
                        <Price>
                            R$ 580
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
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>

                    <Feather
                        size={RFValue(15)}
                        color={theme.COLORS.text_detail}
                        name='chevron-right'
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>20/06/21</DateValue>
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