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

interface NavigationProps {
    navigate: (
        screen: string
    ) => void;
    goBack: () => void;
}

export function SignupFirstStep() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [document, setDocument] = useState('');
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
                                onChangeText={setEmail}
                                value={email}
                            />
                        </WrapperInput>

                        <Input
                            iconName='credit-card'
                            placeholder='CNH'
                            autoCorrect={false}
                            onChangeText={setDocument}
                            value={document}
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