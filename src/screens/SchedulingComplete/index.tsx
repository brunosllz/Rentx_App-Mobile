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
import { useNavigation } from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { ConfirmButton } from '../../components/ConfirmButton';

export function SchedulingComplete() {
    const { width, height } = useWindowDimensions();
    const navigation = useNavigation<any>();

    function handleHome() {
        navigation.navigate({ name: 'Home' });
    }

    return (
        <Container>
            <StatusBar style='light' translucent={true} />

            <LogoSvg width={width} height={height / 3} />

            <Content>
                <IconWrapper>
                    <DoneSvg />
                </IconWrapper>

                <Title>Carro Alugado!</Title>
                <Message>
                    Agora você só precisa ir{'\n'}
                    até a concessionária da RENTX{'\n'}
                    pegar o seu automóvel.
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