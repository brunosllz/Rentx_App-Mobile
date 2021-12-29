import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
    color?: 'green' | 'red';
}

export const Container = styled(RectButton) <ButtonProps>`
    background-color: ${({ color, theme }) => color === 'red' ? theme.COLORS.primary : theme.COLORS.active};
    
    width: 100%;
    height: ${RFValue(56)}px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.background_secondary};
    font-family: ${({ theme }) => theme.FONTS.secondary_medium};
    font-size: ${RFValue(15)}px;

`;