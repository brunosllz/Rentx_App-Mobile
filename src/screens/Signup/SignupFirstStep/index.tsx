import React, { useState } from 'react';
import {
    Container,
    Header,
    Content,
    Title,
    Description,
    Form,
    FormTitle,
    WrapperInput,
    Footer
} from './styles';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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

    function handleBack() {
        navigation.goBack()
    }

    function handleNextstep() {
        navigation.navigate('SignupSecoundStep')
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <Container>
                    <Header>
                        <BackButton
                            onPress={handleBack}
                            color='gray'
                        />
                    </Header>

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
                        />
                    </Form>

                    <Footer>
                        <Button
                            title='Próximo'
                            color='red'
                            onPress={handleNextstep}
                        />
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}