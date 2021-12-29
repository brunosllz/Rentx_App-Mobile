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
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

import { CarDTO } from '../../dtos/CarDTO';
import { getUtfDate } from '../../components/Calendar/getUtfDate';

import {
   Calendar,
   DayProps,
   generateInterval,
   MarkedDateProps
} from '../../components/Calendar';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';

import ArrowSvg from '../../assets/arrow.svg';

interface Rentalperiod {
   startFormatted: string;
   endFormatted: string;
}

interface Params {
   car: CarDTO
}

interface NavigationProps {
   goBack: () => void;
   navigate: (
      screen: string,
      carObject: {
         car: CarDTO,
         dates: string[]
      }
   ) => void;
}

export function Scheduling() {
   const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
   const [markedDate, setMarkedDate] = useState<MarkedDateProps>({} as MarkedDateProps)
   const [rentalPeriod, setRentalPeriod] = useState<Rentalperiod>({} as Rentalperiod)
   const route = useRoute();
   const { car } = route.params as Params;
   const navigation = useNavigation<NavigationProps>();

   function handleSchedulingDetails() {
      navigation.navigate('SchedulingDetails', {
         car,
         dates: Object.keys(markedDate)
      });
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

      const firstDate = Object.keys(interval)[0];
      const endDate = Object.keys(interval)[Object.keys(interval).length - 1];
      setRentalPeriod({
         startFormatted: format(getUtfDate(new Date(firstDate)), 'dd/MM/yyyy'),
         endFormatted: format(getUtfDate(new Date(endDate)), 'dd/MM/yyyy')
      })
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
                  <DataValue selected={!!rentalPeriod.startFormatted}>
                     {rentalPeriod.startFormatted}
                  </DataValue>
               </DateInfo>

               <ArrowSvg />

               <DateInfo>
                  <DateTitle>ATÉ</DateTitle>
                  <DataValue selected={!!rentalPeriod.endFormatted}>
                     {rentalPeriod.endFormatted}
                  </DataValue>
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
               enable={!!rentalPeriod.startFormatted}
               onPress={handleSchedulingDetails}
            />
         </Footer>
      </Container>
   );
}