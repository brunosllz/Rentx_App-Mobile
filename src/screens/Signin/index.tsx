import React, { useState } from 'react';
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
import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Input } from '../../components/Input';
import { PasswdInput } from '../../components/PasswdInput';

export function Signin() {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                                onChangeText={setEmail}
                                value={email}
                            />
                        </WrapperInput>

                        <PasswdInput
                            iconName='lock'
                            placeholder='Senha'
                            autoCorrect={false}
                            onChangeText={setPasswd}
                            value={passwd}
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
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}