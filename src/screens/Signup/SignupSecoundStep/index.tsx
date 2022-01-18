import React, { useState } from 'react';
import {
    Container,
    Header,
    Steps,
    Content,
    Title,
    Description,
    Form,
    FormTitle,
    WrapperInput,
    Footer
} from './styles';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import * as yup from 'yup';

import { UserDTO } from '../../../dtos/UserDTO';

import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { Bullet } from '../../../components/Bullet';
import { PasswdInput } from '../../../components/PasswdInput';

interface NavigationProps {
    navigate: (
        screen: string,
        ConfirmScreen: {
            title: string,
            nextScreen: string
        }
    ) => void;
    goBack: () => void;
}

interface Params {
    user: UserDTO;
}

export function SignupSecoundStep() {
    const [passwd, setPasswd] = useState('');
    const [confirmPasswd, setCorfirmPasswd] = useState('');
    const navigation = useNavigation<NavigationProps>();
    const theme = useTheme();

    const route = useRoute();
    const { user } = route.params as Params

    function handleBack() {
        navigation.goBack();
    }

    async function handleRegister() {
        try {
            const schema = yup.object({
                passwd: yup.string().required('A senha é obrigatória'),
                confirmPasswd: yup.string().required('Confirme sua senha')
            })

            const data = { passwd, confirmPasswd };
            await schema.validate(data);

            if (passwd !== confirmPasswd) {
                return Alert.alert('Ops', 'As senhas devem ser iguais');
            }

            navigation.navigate('Corfimation', {
                title: 'Conta criada!',
                nextScreen: 'Signin'
            });
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                Alert.alert('Ops', error.message);
            }
        }
    }

    return (
        <Container>
            <StatusBar style='dark' backgroundColor={theme.COLORS.background_primary} />
            <Header>
                <BackButton
                    onPress={handleBack}
                    color='gray'
                />

                <Steps>
                    <Bullet
                        active={false}
                    />
                    <Bullet
                        active
                    />
                </Steps>
            </Header>

            <KeyboardAvoidingView behavior='position' enabled>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Content>
                        <Title>
                            Crie sua{'\n'}conta
                        </Title>
                        <Description>
                            Faça seu cadastro de{'\n'}forma rápida e fácil.
                        </Description>
                    </Content>

                    <Form>
                        <FormTitle>
                            1. Senha
                        </FormTitle>

                        <WrapperInput>
                            <PasswdInput
                                iconName='lock'
                                placeholder='Senha'
                                onChangeText={setPasswd}
                                value={passwd}
                            />
                        </WrapperInput>

                        <PasswdInput
                            iconName='lock'
                            placeholder='Repetir senha'
                            onChangeText={setCorfirmPasswd}
                            value={confirmPasswd}
                        />
                    </Form>

                    <Footer>
                        <Button
                            title='Próximo'
                            color='red'
                            enabled={!!passwd}
                            onPress={handleRegister}
                        />
                    </Footer>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Container>
    );
}