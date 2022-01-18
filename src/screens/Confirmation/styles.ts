import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.header};
    
    flex: 1;
    align-items: center;

    padding: ${getStatusBarHeight() + RFPercentage(8)}px 0px;
`;

export const Content = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;

    padding-bottom: ${RFPercentage(8)}px;
`;

export const IconWrapper = styled.View`
    margin: ${RFPercentage(1)}px 0 ${RFPercentage(6)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.COLORS.background_secondary};
    font-family: ${({ theme }) => theme.FONTS.primary_semiBold};
`;

export const Message = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.COLORS.text};
    font-family: ${({ theme }) => theme.FONTS.secondary_regular};

    text-align: center;
    line-height: ${RFValue(25)}px;  

    margin-top: ${RFPercentage(1)}px;
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;

`;
