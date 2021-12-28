import React, { useEffect, useState } from 'react';
import {
    Container,
    Header,
    ButtonWrapper,
    Title,
    Description,
    Content
} from './styles';
import { useNavigation } from '@react-navigation/native';

import { CarDTO } from '../../dtos/CarDTO';

import { BackButton } from '../../components/BackButton';
import api from '../../service/api';

export function MyCar() {
    const [cars, setCars] = useState<CarDTO>({} as CarDTO)
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation<any>()

    function handleBack() {
        navigation.goBack()
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/schedules_byuser?user_id=1');
                setCars(response.data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        }

        fetchCars();
    }, []);

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