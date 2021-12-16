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
    About,
    Footer
} from './styles';

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

interface Props {
   
}

export function CarDetails() {
   return(
        <Container>
            <Header>
                <BackButton
                    onPress={() => {}}
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
                    <CarAcessory name='380km/h' icon={SpeedSvg}/>
                    <CarAcessory name='3.2s' icon={AccelerationSvg}/>
                    <CarAcessory name='800 HP' icon={ForceSvg}/>
                    <CarAcessory name='Gasolina' icon={GasolineSvg}/>
                    <CarAcessory name='Auto' icon={ExchangeSvg}/>
                    <CarAcessory name='2 pessoas' icon={PeopleSvg}/>
                </AcessoryWrapper>

                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>

            <Footer>
                <Button
                    title='Escolher período do aluguel'
                />
            </Footer>
        </Container>
   );
}