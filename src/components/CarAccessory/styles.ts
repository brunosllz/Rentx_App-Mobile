import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.background_primary};

    width: ${Dimensions.get('window').width / 3.45}px;
    height: ${RFValue(92)}px;

    justify-content: center;
    align-items: center;

    padding: ${RFValue(16)}px;
    margin-bottom: ${RFValue(8)}px;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.COLORS.text};
    font-family: ${({ theme }) => theme.FONTS.secondary_medium};
    font-size: ${RFValue(13)}px;

    margin-top: ${RFValue(14)}px;
`;