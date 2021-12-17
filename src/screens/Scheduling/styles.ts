import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.COLORS.header};
    
    width: 100%;
    height: ${RFValue(325)}px;

    padding: 0 ${RFValue(24)}px;
`;

export const ButtonWrapper = styled.View`
    align-items: flex-start;
    margin-top: ${getStatusBarHeight() + RFValue(20)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.background_secondary};
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.FONTS.primary_semiBold};

    margin-top: ${RFValue(24)}px;
`;