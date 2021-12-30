import React from 'react';
import { FlatList } from 'react-native';

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
    return (
        <Container>
            <IndexImgameWrapper>
                {
                    imageUrl.map((_, index) => (
                        <IndexImgame
                            key={index}
                            active={true}
                        />
                    ))
                }

            </IndexImgameWrapper>

            <FlatList
                data={imageUrl}
                keyExtractor={key => key}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CarImageWrapper>
                        <CarImage
                            source={{ uri: item }}
                        />
                    </CarImageWrapper>
                )}
            />

        </Container>
    );
}