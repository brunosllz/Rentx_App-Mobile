import React from 'react';
import { BackButton } from '../../components/BackButton';

import {
   Container,
   Header,
   ButtonWrapper,
   Title
} from './styles';

export function Scheduling() {
   return(
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
          </Header>

       </Container>
   );
}