import React from 'react';
import {
    Container,
    InfoWrapper,
    Brand,
    CarName,
    AboutInfoWrapper,
    Period,
    PriceAndtypeWrapper,
    Price,
    ImageCar
} from './styles';

import ConsumptionTypeSvg from '../../assets/gasoline.svg';

export function CarCard() {
   return(
        <Container>
            <InfoWrapper>
                <Brand>
                    PORSCHE
                </Brand>

                <CarName>
                    Panamera
                </CarName>

                <AboutInfoWrapper>
                    <Period>
                        AO DIA
                    </Period>

                    <PriceAndtypeWrapper>
                        <Price>
                            R$ 340
                        </Price>

                        <ConsumptionTypeSvg />
                    </PriceAndtypeWrapper>
                </AboutInfoWrapper>
            </InfoWrapper>

            <ImageCar source={{ uri: 'https://e7.pngegg.com/pngimages/464/370/png-clipart-porsche-porsche.png' }}/>
        </Container>
   );
}