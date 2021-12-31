import React from 'react';
import {
    Container
} from './styles';
import { StyleSheet } from 'react-native';

import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import Animated, {
    useAnimatedStyle,
    withTiming
} from 'react-native-reanimated';

type DotProps = {
    index: number;
    activeDotIndex: Animated.SharedValue<number>
}

export function Dot({ index, activeDotIndex }: DotProps) {
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
            <Animated.View style={[DotStyle, styles.dot]} />
        </Container>
    )
}

const styles = StyleSheet.create({
    dot: {
        width: 6,
        height: 6,
        borderRadius: 5,
        marginHorizontal: RFValue(3)
    }
})