import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.COLORS.background_primary};
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.COLORS.header};
    
    width: 100%;
    height: ${RFValue(245)}px;

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

export const Description = styled.Text`
    color: ${({ theme }) => theme.COLORS.background_secondary};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.primary_regular};

    margin-top: ${RFValue(18)}px;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Appointments = styled.View`
    width: 100%;

    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    padding: 29px ${RFValue(24)}px;
`;

export const AppointmentsTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.text};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.secondary_regular};
`;

export const AppointmentsAmount = styled.Text`
    color: ${({ theme }) => theme.COLORS.text};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.secondary_regular};
`;

export const LoadWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const CarWrapper = styled.View`
    margin-bottom: 16px;
`;

export const CarFooter = styled.View`
    background-color: ${({ theme }) => theme.COLORS.background_secondary};
    flex-direction: row;

    height: ${RFValue(40)}px;
    
    align-items: center;
    justify-content: space-between;

    padding: 0 ${RFValue(24)}px;
    margin-top: 2px;
`;

export const CarFooterTittle = styled.Text`
    color: ${({ theme }) => theme.COLORS.text_detail};
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.primary_medium};
`;

export const CarFooterPeriod = styled.View`
    flex-direction: row;
    
    align-items: center;
`;

export const CarFooterDate = styled.Text`
    color: ${({ theme }) => theme.COLORS.heading};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.FONTS.secondary_regular};
`;
