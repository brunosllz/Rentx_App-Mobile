import React from 'react';
import { Dimensions, ScrollView } from 'react-native';

import Animated, {
    useAnimatedRef,
    useAnimatedScrollHandler,
    useDerivedValue,
    useSharedValue
} from 'react-native-reanimated';

import { Dot } from '../DotImageSlider';

import {
    Container,
    IndexImageWrapper,
    CarImageWrapper,
    CarImage
} from './styles';

interface Props {
    imageUrl: string[];
}

export function ImageSlider({ imageUrl }: Props) {
    const { width: SCREEN_WIDTH } = Dimensions.get('window');
    const translateX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            translateX.value = event.contentOffset.x;
        },
    });

    const activeIndex = useDerivedValue(() => {
        return Math.round(translateX.value / SCREEN_WIDTH);
    });

    const scrollRef = useAnimatedRef<ScrollView>();

    return (
        <Container>
            <IndexImageWrapper>
                {
                    imageUrl.map((_, index) => (
                        <Dot
                            key={index.toString()}
                            index={index}
                            activeDotIndex={activeIndex}
                        />
                    ))
                }
            </IndexImageWrapper>

            <Animated.ScrollView
                ref={scrollRef as any}
                onScroll={scrollHandler}
                pagingEnabled={true}
                scrollEventThrottle={16}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    imageUrl.map(image => (
                        <CarImageWrapper>
                            <CarImage
                                key={image}
                                source={{ uri: image }}
                            />
                        </CarImageWrapper>
                    ))
                }
            </Animated.ScrollView>
        </Container>
    );
}