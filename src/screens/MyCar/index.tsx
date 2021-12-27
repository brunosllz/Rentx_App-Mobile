import React from 'react';
import {
    Container,
    Header,
    ButtonWrapper,
    Title,
    Description,
    Content
} from './styles';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';

export function MyCar() {
    const navigation = useNavigation<any>()

    function handleBack() {
        navigation.goBack()
    }

    return (
        <Container>
            <Header>
                <ButtonWrapper>
                    <BackButton
                        onPress={handleBack}
                        color='white'
                    />
                </ButtonWrapper>

                <Title>Seus agendamentos,{'\n'}estão aqui.</Title>
                <Description>Conforto, segurança e praticidade.</Description>
            </Header>

            <Content>

            </Content>
        </Container>
    );
}