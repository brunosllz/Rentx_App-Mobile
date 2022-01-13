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
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';

import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Bullet } from '../../../components/Bullet';
import { PasswdInput } from '../../../components/PasswdInput';

interface NavigationProps {
    navigate: (
        screen: string
    ) => void;
    goBack: () => void;
}

export function SignupSecoundStep() {
    const [passwd, setPasswd] = useState('');
    const [confirmPasswd, setCorfirmPasswd] = useState('');
    const navigation = useNavigation<NavigationProps>()
    const theme = useTheme()

    function handleBack() {
        navigation.goBack()
    }

    function handleNextstep() {
        navigation.navigate('SignupSecoundStep')
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
                                autoCorrect={false}
                                onChangeText={setPasswd}
                                value={passwd}
                            />
                        </WrapperInput>

                        <PasswdInput
                            iconName='lock'
                            placeholder='Repetir senha'
                            autoCorrect={false}
                            onChangeText={setCorfirmPasswd}
                            value={confirmPasswd}
                        />
                    </Form>

                    <Footer>
                        <Button
                            title='Próximo'
                            color='red'
                            onPress={() => { }}
                        />
                    </Footer>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Container>
    );
}