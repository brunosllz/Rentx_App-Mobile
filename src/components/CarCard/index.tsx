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
    CarImage
} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

import ConsumptionTypeSvg from '../../assets/gasoline.svg';

interface CarData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    }
    thumbnail: string;
}

interface Props extends RectButtonProps {
    data: CarData;
}

export function CarCard({ data, ...rest }: Props) {
    return (
        <Container {...rest}>
            <InfoWrapper>
                <Brand>
                    {data.brand}
                </Brand>

                <CarName>
                    {data.name}
                </CarName>

                <AboutInfoWrapper>
                    <Period>
                        {data.rent.period}
                    </Period>

                    <PriceAndtypeWrapper>
                        <Price>
                            {`R$ ${data.rent.price}`}
                        </Price>

                        <ConsumptionTypeSvg width={20} height={20} />
                    </PriceAndtypeWrapper>
                </AboutInfoWrapper>
            </InfoWrapper>

            <CarImage
                source={{ uri: data.thumbnail }}
                resizeMode='contain'
            />
        </Container>
    );
}