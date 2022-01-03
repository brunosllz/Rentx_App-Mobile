import React from 'react';
import {
    Container,
    DotAnimated
} from './styles';
import { useTheme } from 'styled-components';

import Animated, {
    useAnimatedStyle,
    withTiming
} from 'react-native-reanimated';

type DotProps = {
    index: number;
    activeDotIndex: Animated.SharedValue<number>
}

export function DotImageSlider({ index, activeDotIndex }: DotProps) {
    const theme = useTheme();

    const DotStyle = useAnimatedStyle(() => {
        const isActive = activeDotIndex.value === index;

        return {
            backgroundColor: withTiming(
                isActive ?
                    theme.COLORS.header
                    :
                    theme.COLORS.text_detail,
                { duration: 150 }
            )
        }
    })

    return (
        <Container>
            <DotAnimated style={[DotStyle]} />
        </Container>
    )
}