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
import { StatusBar } from 'expo-status-bar';

import ArrowSvg from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling() {
   return (
      <Container>
         <StatusBar style='light' translucent={true} />

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
            <Calendar />
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