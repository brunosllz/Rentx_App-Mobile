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
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';

import { UserDTO } from '../../../dtos/UserDTO';

import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Bullet } from '../../../components/Bullet';

interface NavigationProps {
    navigate: (
        screen: string,
        UserObject: {
            user: UserDTO
        }
    ) => void;
    goBack: () => void;
}

export function SignupFirstStep() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [driverLicense, setDriverLicense] = useState('');
    const navigation = useNavigation<NavigationProps>()
    const theme = useTheme()

    function handleBack() {
        navigation.goBack()
    }

    async function handleNextstep() {
        try {
            const schema = yup.object({
                driverLicense: yup.string().required('CNH é obrigatório'),
                email: yup.string().email('Email inválido').required('Email é obrigatório'),
                name: yup.string().required('Nome é obrigatório')
            })

            const data = { name, email, driverLicense };
            await schema.validate(data);

            navigation.navigate('SignupSecoundStep', { user: data })
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
                        active
                    />
                    <Bullet
                        active={false}
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
                            1. Dados
                        </FormTitle>

                        <WrapperInput>
                            <Input
                                iconName='user'
                                placeholder='Nome'
                                autoCorrect={false}
                                onChangeText={setName}
                                value={name}
                            />
                        </WrapperInput>

                        <WrapperInput>
                            <Input
                                iconName='mail'
                                placeholder='E-mail'
                                autoCorrect={false}
                                autoCapitalize='none'
                                onChangeText={setEmail}
                                value={email}
                            />
                        </WrapperInput>

                        <Input
                            iconName='credit-card'
                            placeholder='CNH'
                            autoCorrect={false}
                            onChangeText={setDriverLicense}
                            value={driverLicense}
                            keyboardType='numeric'
                        />
                    </Form>

                    <Footer>
                        <Button
                            title='Próximo'
                            color='red'
                            onPress={handleNextstep}
                        />
                    </Footer>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Container>
    );
}