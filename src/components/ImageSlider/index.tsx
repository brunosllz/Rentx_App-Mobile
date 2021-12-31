import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import {
    Container,
    IndexImageWrapper,
    IndexImage,
    CarImageWrapper,
    CarImage
} from './styles';

interface Props {
    imageUrl: string[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({ imageUrl }: Props) {
    const [imageIndex, setImageIndex] = useState(0);

    const indexChange = useRef((info: ChangeImageProps) => {
        const index = info.viewableItems[0].index!;
        setImageIndex(index);
    });

    return (
        <Container>
            <IndexImageWrapper>
                {
                    imageUrl.map((_, index) => (
                        <IndexImage
                            key={index}
                            active={index === imageIndex}
                        />
                    ))
                }
            </IndexImageWrapper>

            <FlatList
                data={imageUrl}
                keyExtractor={key => key}
                horizontal
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={indexChange.current}
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