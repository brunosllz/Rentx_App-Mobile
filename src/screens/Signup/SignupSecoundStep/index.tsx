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
import api from '../../../service/api';

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
    const [password, setPassword] = useState('');
    const [confirmPassword, setCorfirmPassword] = useState('');
    const navigation = useNavigation<NavigationProps>();
    const theme = useTheme();

    const route = useRoute();
    const { user } = route.params as Params;

    function handleBack() {
        navigation.goBack();
    }

    async function handleRegister() {
        try {
            const schema = yup.object({
                password: yup.string().required('A senha é obrigatória'),
                confirmPassword: yup.string().required('Confirme sua senha')
            })

            const data = { password, confirmPassword };
            await schema.validate(data);

            if (password !== confirmPassword) {
                return Alert.alert('Ops', 'As senhas devem ser iguais');
            }

            await api.post('/users', {
                name: user.name,
                email: user.email,
                password,
                driver_license: user.driverLicense
            }).then(() => {
                navigation.navigate('Corfimation', {
                    title: 'Conta criada!',
                    nextScreen: 'Signin'
                });
            }).catch((error) => {
                Alert.alert('Ops', 'Não foi possível realizar o cadastro!')
                console.log(error);
            });
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                Alert.alert('Ops', error.message);
            }

            console.log(error);
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
                                onChangeText={setPassword}
                                value={password}
                            />
                        </WrapperInput>

                        <PasswdInput
                            iconName='lock'
                            placeholder='Repetir senha'
                            onChangeText={setCorfirmPassword}
                            value={confirmPassword}
                        />
                    </Form>

                    <Footer>
                        <Button
                            title='Próximo'
                            color='red'
                            enabled={!!password}
                            onPress={handleRegister}
                        />
                    </Footer>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Container>
    );
}