import styled from 'styled-components/native';
import { FlatList, View } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.background_primary};
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

export const CarWrapper = styled(GestureHandlerRootView)`
    width: 100%;
    margin-bottom: 16px;
`;