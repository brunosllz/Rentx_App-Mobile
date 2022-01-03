import styled from 'styled-components/native';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   flex-direction: row;
`;

export const DotAnimated = styled(Animated.createAnimatedComponent(View))`
   width: 6px;
   height: 6px;

   border-radius: 5px;
   
   margin: 0 ${RFValue(3)}px;
`;