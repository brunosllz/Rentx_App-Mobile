import React from 'react';
import {
    Container,
    Content,
    IconWrapper,
    Title,
    Message,
    Footer
} from './styles';
import { useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { ConfirmButton } from '../../components/ConfirmButton';

interface Params {
    title: string;
    message?: string;
    nextScreen: string;
}

export function Corfimation() {
    const { width, height } = useWindowDimensions();
    const navigation = useNavigation<any>();
    const route = useRoute();
    const { title, message, nextScreen } = route.params as Params;

    function handleHome() {
        navigation.navigate({ name: nextScreen });
    }

    return (
        <Container>
            <StatusBar style='light' translucent={true} />

            <LogoSvg width={width} height={height / 3} />

            <Content>
                <IconWrapper>
                    <DoneSvg />
                </IconWrapper>

                <Title>{title}</Title>
                <Message>
                    {message}
                </Message>
            </Content>

            <Footer>
                <ConfirmButton
                    title='Ok'
                    onPress={handleHome}
                />
            </Footer>
        </Container>
    );
}