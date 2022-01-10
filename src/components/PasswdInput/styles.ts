import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

interface Props {
    isFocused: boolean;
}

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
`;

export const WrapperIcon = styled.View<Props>`
    background-color: ${({ theme }) => theme.COLORS.background_secondary};

    height: ${RFValue(56)}px;
    width: ${RFValue(55)}px;

    justify-content: center;
    align-items: center;

    margin-right: 2px;

    border-bottom-width: 2px;
    border-bottom-color: transparent;

    ${({ isFocused, theme }) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.COLORS.primary};
    `}
`;

export const InputText = styled.TextInput<Props>`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.background_secondary};

    color: ${({ theme }) => theme.COLORS.text};
    font-family: ${({ theme }) => theme.FONTS.secondary_regular};
    font-size: ${RFValue(15)}px;

    padding: 0 15px 0 23px;

    border-bottom-width: 2px;
    border-bottom-color: transparent;

    ${({ isFocused, theme }) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.COLORS.primary};
    `}
`;

export const WhapperIconPasswd = styled.View<Props>`
    background-color: ${({ theme }) => theme.COLORS.background_secondary};
    
    align-items: center;
    justify-content: center;

    border-bottom-width: 2px;
    border-bottom-color: transparent;

    ${({ isFocused, theme }) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.COLORS.primary};
    `}
`;

export const ChangePasswdButton = styled(BorderlessButton)`
    background-color: transparent;

    align-items: center;
    justify-content: center;

    margin-right: 14px;
`;
