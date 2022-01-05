import React from 'react';
import { Button } from '../../components/Button';
import {
    Container,
    Header,
    Title,
    Description,
    Form,
    WrapperInput,
    Footer,
    WrapperButtonSignin
} from './styles';
import { StatusBar } from 'expo-status-bar';
import { Input } from '../../components/Input';
import { PasswdInput } from '../../components/PasswdInput';

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
                <WrapperInput>
                    <Input
                        iconName='mail'
                        placeholder='E-mail'
                        keyboardType='email-address'
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                </WrapperInput>

                <PasswdInput
                    iconName='lock'
                    placeholder='Senha'
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