import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
   background-color: ${({ theme }) => theme.COLORS.background_primary};
   flex: 1;
`;

export const Header = styled.View`
   background-color: ${({ theme }) => theme.COLORS.header};
   
   width: 100%;
   height: ${RFValue(227)}px;
   align-items: center;

   padding: 0 ${RFValue(24)}px;
   padding-top: ${getStatusBarHeight() + RFValue(30)}px;
`;

export const HeaderActionsContainer = styled.View`
   width: 100%;
   flex-direction: row;

   align-items: center;
   justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
   font-size: ${RFValue(25)}px;
   font-family: ${({ theme }) => theme.FONTS.primary_semiBold};
   color: ${({ theme }) => theme.COLORS.background_secondary};
`;

export const LogoutButton = styled(BorderlessButton)``;

export const IconButton = styled(Feather)`
    color: ${({ theme }) => theme.COLORS.background_secondary};
`;

export const PhotoContainer = styled.View`
   background-color: ${({ theme }) => theme.COLORS.shape};   
   
   width: ${RFValue(180)}px;
   height: ${RFValue(180)}px;
   
   border-radius: ${RFValue(90)}px;
   margin-top: ${RFValue(40)}px;
`;

export const Photo = styled.Image`
   width: ${RFValue(180)}px;
   height: ${RFValue(180)}px;
   
   border-radius: ${RFValue(90)}px
`;

export const PhotoEditButton = styled(RectButton)`
   background-color: ${({ theme }) => theme.COLORS.primary};
   
   width: ${RFValue(40)}px;
   height:${RFValue(40)}px;;

   align-items: center;
   justify-content: center;

   position: absolute;
   bottom: 0px;
   right: 3px;
`;
