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
    LoadWrapper,
    CarWrapper,
    CarFooter,
    CarFooterTittle,
    CarFooterPeriod,
    CarFooterDate
} from './styles';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { CarDTO } from '../../dtos/CarDTO';
import api from '../../service/api';

import { BackButton } from '../../components/BackButton';
import { CarCard } from '../../components/CarCard';
import { Load } from '../../components/Load';

import { AntDesign } from '@expo/vector-icons';

interface CarProps {
    user_id: string;
    id: string;
    car: CarDTO
    startDate: string;
    endDate: string;
}

export function MyCar() {
    const [cars, setCars] = useState<CarProps[]>([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation<any>()
    const theme = useTheme();

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
                        {cars.length}
                    </AppointmentsAmount>
                </Appointments>

                {
                    loading ?
                        <LoadWrapper>
                            <Load />
                        </LoadWrapper>
                        :
                        <FlatList
                            data={cars}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: RFValue(16)
                            }}
                            renderItem={({ item }) => (
                                <CarWrapper>
                                    <CarCard
                                        data={item.car}
                                    />

                                    <CarFooter>
                                        <CarFooterTittle>
                                            PERÍODO
                                        </CarFooterTittle>
                                        <CarFooterPeriod>
                                            <CarFooterDate>
                                                {item.startDate}
                                            </CarFooterDate>
                                            <AntDesign
                                                name='arrowright'
                                                color={theme.COLORS.text_detail}
                                                size={20}
                                                style={{ paddingHorizontal: 10 }}
                                            />
                                            <CarFooterDate>
                                                {item.endDate






















                                                }
                                            </CarFooterDate>
                                        </CarFooterPeriod>
                                    </CarFooter>
                                </CarWrapper>
                            )}
                        />
                }
            </Content>
        </Container>
    );
}