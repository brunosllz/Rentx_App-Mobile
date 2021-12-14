import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';


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
    Price
} from './styles';

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
            </Content>
        </Container>
   );
}