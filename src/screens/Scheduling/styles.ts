import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateValueProps {
    selected: boolean;
}

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.COLORS.header};
    
    width: 100%;
    height: ${RFValue(300)}px;

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

export const RentalPeriod = styled.View`
    flex-direction: row;
    
    width: 100%;

    justify-content: space-between;
    align-items: center;

    margin-top: ${RFValue(32)}px;
`;

export const DateInfo = styled.View`
    width: 30%;
`;

export const DateTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.text};
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.primary_medium};
`;

export const DataValue = styled.Text<DateValueProps>`
    color: ${({ theme }) => theme.COLORS.background_secondary};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.secondary_medium};

    ${({ theme, selected }) => !selected && css`
        border-bottom-width: 1px;
        border-bottom-color: ${theme.COLORS.text};

        padding-bottom: ${RFValue(2)}px;
    `}
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingHorizontal: RFValue(10),
        paddingVertical: RFValue(10)
    },
    showsVerticalScrollIndicator: false
})``;

export const Footer = styled.View`
    padding: 0 ${RFValue(24)}px ${getBottomSpace() + RFValue(24)}px;
`;
