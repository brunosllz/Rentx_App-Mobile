import React, { useEffect, useState } from 'react';
import {
    Container,
    Header,
    ButtonWrapper,
    Title,
    Description,
    Content,
    Appointments,
    AppointmentsTitle,
    AppointmentsAmount,
} from './styles';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CarDTO } from '../../dtos/CarDTO';

import { BackButton } from '../../components/BackButton';
import api from '../../service/api';
import { CarCard } from '../../components/CarCard';

interface CarProps {
    user_id: string;
    id: string;
    car: CarDTO
}

export function MyCar() {
    const [cars, setCars] = useState<CarProps[]>([]);
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
                <Appointments>
                    <AppointmentsTitle>
                        Agendamentos feitos
                    </AppointmentsTitle>
                    <AppointmentsAmount>
                        02
                    </AppointmentsAmount>
                </Appointments>

                <FlatList
                    data={cars}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CarCard
                            data={item.car}
                        />
                    )}
                />
            </Content>
        </Container>
    );
}