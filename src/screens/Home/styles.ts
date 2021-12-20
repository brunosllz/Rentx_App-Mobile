import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.background_primary};
`;

export const CarList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})`

`;