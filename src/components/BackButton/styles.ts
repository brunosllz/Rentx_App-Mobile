import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ColorsProps {
    color: 'gray' | 'white';
}

export const Container = styled(BorderlessButton)`
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(MaterialIcons)<ColorsProps>`
    font-size: ${RFValue(24)}px;
    color: ${({color, theme}) =>
        color === 'gray' ? 
        theme.COLORS.shape_dark
        :
        theme.COLORS.background_secondary
    };
`;