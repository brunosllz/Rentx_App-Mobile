import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';

import ArrowSvg from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import {
   Calendar,
   DayProps,
   generateInterval,
   MarkedDateProps
} from '../../components/Calendar';

export function Scheduling() {
   const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
   const [markedDate, setMarkedDate] = useState<MarkedDateProps>({} as MarkedDateProps)
   const navigation = useNavigation<any>();

   function handleSchedulingDetails() {
      navigation.navigate({ name: 'SchedulingDetails' });
   }

   function handleBack() {
      navigation.goBack()
   }

   function handleChangeDate(date: DayProps) {
      let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
      let end = date;

      if (start.timestamp > end.timestamp) {
         start = end;
         end = start;
      }

      setLastSelectedDate(end);
      const interval = generateInterval(start, end);
      setMarkedDate(interval);
   }

   return (
      <Container>
         <StatusBar style='light' translucent={true} />

         <Header>
            <ButtonWrapper>
               <BackButton
                  color='white'
                  onPress={handleBack}
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
            <Calendar
               markedDates={markedDate}
               onDayPress={handleChangeDate}
            />
         </Content>

         <Footer>
            <Button
               title='Confirmar'
               color='red'
               onPress={handleSchedulingDetails}
            />
         </Footer>
      </Container>
   );
}