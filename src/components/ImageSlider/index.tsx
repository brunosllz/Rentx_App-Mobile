import React from 'react';
import {
    Container,
    IndexImageWrapper,
    WrapperScrollViewAnimated,
    CarImageWrapper,
    CarImage
} from './styles';
import { Dimensions, ScrollView } from 'react-native';

import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedRef,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue
} from 'react-native-reanimated';

import { DotImageSlider } from '../DotImageSlider';

interface Props {
    photos: {
        id: string,
        photo: string
    }[];
    translate?: Animated.SharedValue<number>
}

export function ImageSlider({ photos, translate }: Props) {
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

    const imageSliderStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: interpolate(
                        translate.value,
                        [0, 250],
                        [1, .6],
                        Extrapolate.CLAMP
                    ),
                },
                {
                    translateY: interpolate(
                        translate.value,
                        [0, 250],
                        [0, -120],
                        Extrapolate.CLAMP
                    )
                }
            ]
        }
    });

    return (
        <Container>
            <IndexImageWrapper>
                {
                    photos.map((item, index) => (
                        <DotImageSlider
                            key={item.id}
                            index={index}
                            activeDotIndex={activeIndex}
                        />
                    ))
                }
            </IndexImageWrapper>

            <WrapperScrollViewAnimated style={imageSliderStyle}>
                <Animated.ScrollView
                    ref={scrollRef as any}
                    onScroll={scrollHandler}
                    pagingEnabled={true}
                    scrollEventThrottle={16}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        photos.map(item => (
                            <CarImageWrapper>
                                <CarImage
                                    key={item.id}
                                    source={{ uri: item.photo }}
                                />
                            </CarImageWrapper>
                        ))
                    }
                </Animated.ScrollView>
            </WrapperScrollViewAnimated>
        </Container>
    );
}