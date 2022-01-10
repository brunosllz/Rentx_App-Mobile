import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
    color?: 'green' | 'red' | 'white';
}

export const Container = styled(RectButton) <ButtonProps>`
   ${({ theme, color }) => color === 'red' && css`background-color: ${theme.COLORS.primary}`};
   ${({ theme, color }) => color === 'green' && css`background-color: ${theme.COLORS.active}`};
   ${({ theme, color }) => color === 'white' && css`background-color: ${theme.COLORS.background_secondary}`};
    
    width: 100%;
    height: ${RFValue(56)}px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text<ButtonProps>`
    color: ${({ theme, color }) => color === 'white' ?
        theme.COLORS.heading : theme.COLORS.background_secondary
    };
    font-family: ${({ theme }) => theme.FONTS.secondary_medium};
    font-size: ${RFValue(15)}px;
`;