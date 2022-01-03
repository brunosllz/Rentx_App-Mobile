import { ScrollView, View } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    align-items: flex-start;

    margin: 0 ${RFValue(24)}px;
    margin-top: ${getStatusBarHeight() + RFValue(20)}px;
    position: absolute;
    z-index: 1;
`;

export const ImageSliderWrapperAnimated = styled(Animated.createAnimatedComponent(View))`
   margin-top: ${getStatusBarHeight() + RFValue(30)}px;
    margin-bottom: ${RFValue(10)}px;
`;

export const ContentAnimated = styled(Animated.createAnimatedComponent(ScrollView)).attrs({
    contentContainerStyle: {
        alignItems: 'center'
    },
    showsVerticalScrollIndicator: false
})``;

export const Details = styled.View`
    width: 100%;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    padding: 0 ${RFValue(24)}px;
    margin-top: 38px;
`;
export const Description = styled.View`

`;
export const Brand = styled.Text`
    color: ${({ theme }) => theme.COLORS.text_detail};
    font-family: ${({ theme }) => theme.FONTS.primary_medium};
    font-size: ${RFValue(10)}px;
    
    text-transform: uppercase;
`;
export const Model = styled.Text`
    color: ${({ theme }) => theme.COLORS.heading};
    font-family: ${({ theme }) => theme.FONTS.primary_medium};
    font-size: ${RFValue(25)}px;
`;
export const Rent = styled.View`

`;
export const Period = styled.Text`
    color: ${({ theme }) => theme.COLORS.text_detail};
    font-family: ${({ theme }) => theme.FONTS.primary_medium};
    font-size: ${RFValue(10)}px;
    
    text-transform: uppercase;
`;
export const Price = styled.Text`
    color: ${({ theme }) => theme.COLORS.primary};
    font-family: ${({ theme }) => theme.FONTS.primary_medium};
    font-size: ${RFValue(25)}px;
    
    text-transform: uppercase;
`;

export const AccessoryWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: space-between;

    margin-top: ${RFValue(16)}px;
    padding: 0 ${RFValue(16)}px;
`;

export const Footer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.background_primary};
    
    width: 100%;
    height: ${RFValue(111)}px;

    align-items: center;
    justify-content: center;

    padding: ${RFValue(24)}px ${RFValue(24)}px ${getBottomSpace() + RFValue(24)}px;
`;

export const RentalPeriod = styled.View`
    width: 100%;

    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    padding: ${RFValue(15)}px ${RFValue(24)}px;
    margin-top: ${RFValue(10)}px;

    border-bottom-width: 0.5px;
    border-bottom-color: ${({ theme }) => theme.COLORS.text_detail};
`;

export const CalendarIcon = styled.View`
    background-color: ${({ theme }) => theme.COLORS.primary};

    align-items: center;
    justify-content: center;

    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
`;

export const DateInfo = styled.View`
`;

export const DateTitle = styled.Text` 
    color: ${({ theme }) => theme.COLORS.text_detail};
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.primary_medium};

    text-transform: uppercase;
`;

export const DateValue = styled.Text`
    color: ${({ theme }) => theme.COLORS.heading};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.secondary_medium};

    margin-top: ${RFValue(5)}px;
`;

export const RentalPrice = styled.View`
    width: 100%;

    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    padding: ${RFValue(15)}px ${RFValue(24)}px;
`;

export const RentalPriceInfo = styled.View`
`;

export const RentalPriceLabel = styled.Text`
    color: ${({ theme }) => theme.COLORS.text_detail};
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.primary_medium};

    text-transform: uppercase;
`;

export const RentalPriceQuota = styled.Text`
    color: ${({ theme }) => theme.COLORS.heading};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.secondary_medium};

    margin-top: ${RFValue(5)}px;
`;

export const RentalPriceTotal = styled.Text`
    color: ${({ theme }) => theme.COLORS.active};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.FONTS.primary_medium};
`;
