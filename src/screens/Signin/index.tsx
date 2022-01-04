import React from 'react';
import { Button } from '../../components/Button';
import {
    Container,
    Header,
    Title,
    Description,
    Footer,
    WrapperButtonSignin
} from './styles';

export function Signin() {
    return (
        <Container>
            <Header>
                <Title>
                    Estamos{"\n"}quase lá.
                </Title>

                <Description>
                    Faça seu login para começar{"\n"}uma experiência incrível.
                </Description>
            </Header>
            <Footer>
                <Button
                    title='Login'
                />
                <WrapperButtonSignin>
                    <Button
                        title='Criar conta gratuita'
                        color='white'
                    />
                </WrapperButtonSignin>
            </Footer>
        </Container>
    );
}