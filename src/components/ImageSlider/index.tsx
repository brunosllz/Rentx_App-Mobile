import React from 'react';

import {
   Container,
   IndexImgameWrapper,
   IndexImgame,
   CarImageWrapper,
   CarImage
} from './styles';

interface Props {
    imageUrl: string[];
}

export function ImageSlider({ imageUrl }: Props) {
   return(
       <Container>
            <IndexImgameWrapper>
                <IndexImgame active={true}/>
                <IndexImgame active={false}/>
                <IndexImgame active={false}/>
                <IndexImgame active={false}/>
           </IndexImgameWrapper>

            <CarImageWrapper>
                <CarImage 
                    source={{uri: imageUrl[0]}}

                />

            </CarImageWrapper>
       </Container>
   );
}