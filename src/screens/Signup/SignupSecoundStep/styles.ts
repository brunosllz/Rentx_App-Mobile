import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   background-color: ${({ theme }) => theme.COLORS.background_primary};
   padding: 0 ${RFValue(24)}px;
`;

export const Header = styled.View`
   width: 100%;
   background-color: ${({ theme }) => theme.COLORS.background_primary};
   align-items: flex-start;

   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   padding: ${RFValue(20)}px 0;
   margin-top: ${getStatusBarHeight()}px;
`;

export const Steps = styled.View`
   flex-direction: row;
`;

export const Content = styled.View`
   margin-top: ${RFValue(48)}px;
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
   margin-top: ${RFValue(64)}px;  
`;

export const FormTitle = styled.Text`
   font-size: ${RFValue(20)}px;
   color: ${({ theme }) => theme.COLORS.heading};
   font-family: ${({ theme }) => theme.FONTS.primary_semiBold};

   margin-bottom: ${RFValue(24)}px;
`;

export const WrapperInput = styled.View`
   margin-bottom: ${RFValue(8)}px;
`;

export const Footer = styled.View`
   width: 100%;
   margin-top: ${RFValue(16)}px;
`;