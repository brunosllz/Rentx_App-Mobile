import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

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

export const MyCarButton = styled(RectButton)`
    background-color: ${({ theme }) => theme.COLORS.primary};

    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 30px;

    position: absolute;
    bottom: ${RFValue(13)}px;
    right: ${RFValue(20)}px;
`;

export const Icon = styled(Ionicons)`
    color: ${({ theme }) => theme.COLORS.background_secondary};
`;
