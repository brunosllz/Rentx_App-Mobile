import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.background_primary};
`;

export const LoadWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
    contentContainerStyle: {
        padding: 16
    }
})``;