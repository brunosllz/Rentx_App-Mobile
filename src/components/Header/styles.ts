import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.header};

    width: 100%;
    height: ${getStatusBarHeight() + RFPercentage(13)}px;

    
    justify-content: flex-end;
    padding: ${RFValue(32)}px ${RFValue(24)}px;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    
    align-items: center;
    justify-content: space-between;
`;

export const TotalCars = styled.Text`
    color: ${({ theme }) => theme.COLORS.text};

    font-family: ${({ theme }) => theme.FONTS.secondary_regular};
    font-size: ${RFValue(15)}px;
`;