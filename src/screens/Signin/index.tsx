import React from 'react';
import { Button } from '../../components/Button';
import {
    Container,
    Header,
    Title,
    Description,
    Form,
    Footer,
    WrapperButtonSignin
} from './styles';
import { StatusBar } from 'expo-status-bar';
import { Input } from '../../components/Input';

export function Signin() {
    return (
        <Container>
            <StatusBar style='dark' translucent={true} />
            <Header>
                <Title>
                    Estamos{"\n"}quase lá.
                </Title>

                <Description>
                    Faça seu login para começar{"\n"}uma experiência incrível.
                </Description>
            </Header>

            <Form>
                <Input
                    iconName='mail'
                />
            </Form>

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