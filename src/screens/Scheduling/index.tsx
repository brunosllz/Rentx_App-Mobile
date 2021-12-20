import React from 'react';
import {
   Container,
   Header,
   ButtonWrapper,
   Title,
   RentalPeriod,
   DateInfo,
   DateTitle,
   DataValue,
   Content,
   Footer
} from './styles';

import ArrowSvg from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';

export function Scheduling() {
   return (
      <Container>
         <Header>
            <ButtonWrapper>
               <BackButton
                  color='white'
               />
            </ButtonWrapper>

            <Title>
               Escolha uma{"\n"}data de ínicio{"\n"}e fim do aluguel
            </Title>

            <RentalPeriod>
               <DateInfo>
                  <DateTitle>DE</DateTitle>
                  <DataValue selected={true}>18/12/21</DataValue>
               </DateInfo>

               <ArrowSvg />

               <DateInfo>
                  <DateTitle>ATÉ</DateTitle>
                  <DataValue selected={true}>18/12/21</DataValue>
               </DateInfo>
            </RentalPeriod>
         </Header>

         <Content>

         </Content>

         <Footer>
            <Button
               title='Confirmar'
               color='red'
            />
         </Footer>
      </Container>
   );
}