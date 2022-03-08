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

import { Car as ModelCar } from '../../database/model/Car';
import { getAcessoryIcon } from '../../utils/getAccessoryIcon';

interface Props extends RectButtonProps {
    data: ModelCar;
}

export function CarCard({ data, ...rest }: Props) {
    const MotorIcon = getAcessoryIcon(data.fuel_type);

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
                        {data.period}
                    </Period>

                    <PriceAndtypeWrapper>
                        <Price>
                            {`R$ ${data.price}`}
                        </Price>

                        <MotorIcon width={20} height={20} />
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