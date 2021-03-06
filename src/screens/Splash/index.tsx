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
import { StatusBar } from 'expo-status-bar';

interface NavigationProps {
    navigate: (screen: string) => void;
}

export function Splash() {
    const splashAnimated = useSharedValue(0);
    const navigation = useNavigation<NavigationProps>();

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
                [35, 40, 60, 65, 70],
                [0, .3, 1, .3, 0]
            )
        }
    })

    function startApp() {
        // navigation.dispatch(
        //     CommonActions.reset({
        //         index: 0,
        //         routes: [{ name: 'Signin' }]
        //     })
        // )

        navigation.navigate('Signin');
    }

    useEffect(() => {
        splashAnimated.value = withTiming(70, { duration: 6000 },
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        );
    }, []);

    return (
        <Container>
            <StatusBar translucent style='light' />
            <Animated.View style={[brandAnimation, { position: 'absolute' }]}>
                <BrandSvg width={100} height={70} />
            </Animated.View>

            <Animated.View style={[logoAnimation, { position: 'absolute' }]}>
                <LogoSvg width={180} height={20} />
            </Animated.View>
        </Container>
    );
}