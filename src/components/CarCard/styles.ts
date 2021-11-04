import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.background_secondary};

    width: 100%;

    align-items: center;
    justify-content: space-between;

    padding: 24px;
    margin-bottom: 16px;
`;

export const InfoWrapper = styled.View``;

export const Brand = styled.Text`
    color: ${({ theme }) => theme.COLORS.text};
    
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.primary_semiBold};

    text-transform: uppercase;
`;

export const CarName = styled.Text`
    color: ${({ theme }) => theme.COLORS.heading};
    
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.primary_semiBold};
`;

export const AboutInfoWrapper = styled.View`
    margin-top: 16px;
`;

export const Period = styled.Text`
    color: ${({ theme }) => theme.COLORS.text};
    
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.primary_semiBold};
`;

export const PriceAndtypeWrapper = styled.View`
    flex-direction: row;

`;

export const Price = styled.Text`
    color: ${({ theme }) => theme.COLORS.primary};
    
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.secondary_medium};

    padding-right: 24px;
`;

export const ImageCar = styled.Image`
    width: 167px;
    height: 85px;
`;
