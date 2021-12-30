import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ImageIndexProps {
   active: boolean;
}

export const Container = styled.View`
   width: 100%;
`;

export const IndexImgameWrapper = styled.View`
   flex-direction: row;
   align-self: flex-end;
   padding-right: ${RFValue(24)}px;
   padding-bottom: ${RFValue(32)}px;
`;

export const IndexImgame = styled.View<ImageIndexProps>`
   width: 6px;
   height: 6px;
   
   background-color: ${({ theme, active }) =>
      active ? theme.COLORS.heading : theme.COLORS.shape
   };

   margin-left: 8px;
   border-radius: 4px;
`;

export const CarImageWrapper = styled.View`
   width: ${Dimensions.get('window').width}px;
   height: ${RFValue(132)}px;

   justify-content: center;
   align-items: center;
`;

export const CarImage = styled.Image`
   width: 280px;
   height: 132px;
`;
