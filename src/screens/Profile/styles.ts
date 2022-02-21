import styled, { css } from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { TouchableOpacity } from 'react-native';

interface OptionsProps {
   active: boolean;
}

export const Container = styled.View`
   background-color: ${({ theme }) => theme.COLORS.background_primary};
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

export const PhotoSelectButton = styled(RectButton)`
   background-color: ${({ theme }) => theme.COLORS.primary};
   
   width: ${RFValue(40)}px;
   height:${RFValue(40)}px;;

   align-items: center;
   justify-content: center;

   position: absolute;
   bottom: 0px;
   right: 3px;
`;

export const Content = styled.View`
   margin-top: ${RFValue(122)}px;
   padding: 0 ${RFValue(24)}px;
`;

export const ProfileOptions = styled.View`
   flex-direction: row;

   align-items: center;
   justify-content: space-around;

   border-bottom-width: 1px;
   border-bottom-color: ${({ theme }) => theme.COLORS.line};

   margin-bottom: ${RFValue(24)}px;
`;

export const Option = styled(TouchableOpacity) <OptionsProps>`
   padding-bottom: 14px;

   ${({ active }) => active && css`
      border-bottom-width: 2px;
      border-bottom-color: ${({ theme }) => theme.COLORS.primary};
   `}
`;

export const OptionTitle = styled.Text<OptionsProps>`
   color: ${({ theme, active }) => active ? theme.COLORS.heading : theme.COLORS.text_detail};
   font-size: ${RFValue(20)}px;
   font-family: ${({ theme, active }) => active ? theme.FONTS.primary_semiBold : theme.FONTS.primary_regular};
`;

export const Section = styled.View``;

export const WrapperInput = styled.View`
   margin-bottom: ${RFValue(8)}px;
`;