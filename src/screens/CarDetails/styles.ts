import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    
    padding-top: ${getStatusBarHeight()}px;
`;

export const Header = styled.View`
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
`;