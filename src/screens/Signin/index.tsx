import React, { useCallback, useEffect, useState } from 'react';
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
    Keyboard,
    Alert
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hook/auth';

import { Input } from '../../components/Input';
import { PasswdInput } from '../../components/PasswdInput';

interface NavigationProps {
    goBack: () => void;
    navigate: (screen: string) => void
}

export function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation<NavigationProps>();
    const { signIn } = useAuth();

    async function handleSignin() {
        try {
            const schema = yup.object().shape({
                email: yup.string().required('Email é obrigratório').email('Insira um email válido'),
                password: yup.string().required('Senha é obrigatória')
            });

            await schema.validate({ email, password });

            signIn({ email, password });
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                Alert.alert('Ops', error.message);
            }

            console.log(error);
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
                            onChangeText={setPassword}
                            value={password}
                        />
                    </Form>

                    <Footer>
                        <Button
                            title='Login'
                            onPress={handleSignin}
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