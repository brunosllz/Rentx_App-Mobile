import React, { useEffect } from 'react';
import {
    Container
} from './styles';
import { CommonActions, useNavigation } from '@react-navigation/native';

import Animated, {
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

interface NavigationProps {
    navigate: (screen: string) => void;
}

export function Splash() {
    const splashAnimated = useSharedValue(0);
    const navigation = useNavigation();

    const brandAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimated.value,
                [0, 10, 20],
                [1, .3, 0]
            )
        }
    })

    const logoAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimated.value,
                [40, 50, 60, 65, 70],
                [0, .3, 1, .3, 0]
            )
        }
    })

    function startApp() {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Home' }]
            })
        )

        // navigation.navigate('Home');
    }

    useEffect(() => {
        splashAnimated.value = withTiming(70, { duration: 6000 },
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        )
    }, [])

    return (
        <Container>
            <Animated.View style={[brandAnimation, { position: 'absolute' }]}>
                <BrandSvg width={80} height={50} />
            </Animated.View>

            <Animated.View style={[logoAnimation, { position: 'absolute' }]}>
                <LogoSvg width={180} height={20} />
            </Animated.View>
        </Container>
    );
}