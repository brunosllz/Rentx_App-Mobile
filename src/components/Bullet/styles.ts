import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
    active: boolean
}

export const Container = styled.View<Props>`
    background-color: ${({ theme, active }) => active ? theme.COLORS.heading : theme.COLORS.text_detail};

    width: ${RFValue(4)}px;
    height: ${RFValue(4)}px;
    border-radius: ${RFValue(2)}px;

    margin-right: 9px;
`;