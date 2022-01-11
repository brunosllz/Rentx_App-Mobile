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
    WrapperButtonSignup
} from './styles';
import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import { Input } from '../../components/Input';
import { PasswdInput } from '../../components/PasswdInput';

interface NavigationProps {
    navigate: (screen: string) => void
}

export function Signin() {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const navigation = useNavigation<NavigationProps>();

    async function handleSignin() {
        try {
            const schema = yup.object().shape({
                email: yup.string().required('Email é obrigratório').email('Insira um email válido'),
                passwd: yup.string().required('Senha é obrigatória')
            });

            await schema.validate({ email, passwd });
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                error.message
            } else {
                error
            }
        }
    }

    function handleNewAccount() {
        navigation.navigate('SignupFirstStep')
    }

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
                        <WrapperButtonSignup>
                            <Button
                                onPress={handleNewAccount}
                                title='Criar conta gratuita'
                                color='white'
                            />
                        </WrapperButtonSignup>
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}