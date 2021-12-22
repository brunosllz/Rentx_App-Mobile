import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
    background-color: ${({ theme }) => theme.COLORS.shape_dark};
    width: ${RFValue(80)}px;
    height: ${RFValue(56)}px;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.background_secondary};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.secondary_medium};
`;