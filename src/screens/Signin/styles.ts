import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.background_primary};

    padding: 0 ${RFValue(24)}px;
`;

export const Header = styled.View`
    width: 100%;

    margin-top: ${getStatusBarHeight() + RFPercentage(15)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(40)}px;
    color: ${({ theme }) => theme.COLORS.heading};
    font-family: ${({ theme }) => theme.FONTS.primary_semiBold};
`;

export const Description = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.COLORS.text};
    font-family: ${({ theme }) => theme.FONTS.secondary_regular};

    margin-top: 16px;
`;

export const Form = styled.View`
    width: 100%;
    margin: ${RFValue(64)}px 0;
`;

export const WrapperInput = styled.View`
    margin-bottom: ${RFValue(8)}px;
`;

export const Footer = styled.View`
    width: 100%;
`;

export const WrapperButtonSignup = styled.View`
    margin-top: ${RFValue(8)}px;
`;