import React from 'react';
import {
    Container
} from './styles';
import LottieView from 'lottie-react-native';

import LoadingAnimation from '../../assets/loadAnimation.json';
import { RFValue } from 'react-native-responsive-fontsize';

export function LoadAnimation() {
    return (
        <Container>
            <LottieView
                source={LoadingAnimation}
                style={{ height: RFValue(180) }}
                resizeMode='contain'
                autoPlay
                loop
            />
        </Container>
    );
}