import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
    isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
    flex-direction: row;
    width: 100%;

    ${({ isFocused, theme }) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.COLORS.primary};
    `}
`;

export const WrapperIcon = styled.View`
    background-color: ${({ theme }) => theme.COLORS.background_secondary};

    height: ${RFValue(56)}px;
    width: ${RFValue(55)}px;

    justify-content: center;
    align-items: center;

    margin-right: 2px;
`;

export const InputText = styled.TextInput`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.background_secondary};

    color: ${({ theme }) => theme.COLORS.text};
    font-family: ${({ theme }) => theme.FONTS.secondary_regular};
    font-size: ${RFValue(15)}px;

    padding: 0 23px;
`;