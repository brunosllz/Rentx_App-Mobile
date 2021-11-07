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

interface Props {
    data: CarData;
}

export function CarCard({ data }: Props) {
   return(
        <Container>
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

                        <ConsumptionTypeSvg width={20} height={20}/>
                    </PriceAndtypeWrapper>
                </AboutInfoWrapper>
            </InfoWrapper>

            <CarImage 
                source={{ uri:  data.thumbnail}}
                resizeMode='contain'    
            />
        </Container>
   );
}