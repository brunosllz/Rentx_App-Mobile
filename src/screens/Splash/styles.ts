import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.COLORS.header};

   align-items: center;
   justify-content: center;
`;