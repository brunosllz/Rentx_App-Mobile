import React, { useState } from 'react';
import {
    Container,
    Header,
    HeaderActionsContainer,
    HeaderTitle,
    LogoutButton,
    IconButton,
    PhotoContainer,
    Photo,
    PhotoEditButton,
    Content,
    ProfileOptions,
    Option,
    OptionTitle,
    Section,
    WrapperInput
} from './styles';
import {
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native';
import { useAuth } from '../../hook/auth';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { PasswdInput } from '../../components/PasswdInput';

interface NavigationProps {
    goBack: () => void;
}

export function Profile() {
    const { user } = useAuth()
    const navigation = useNavigation<NavigationProps>();
    const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');

    function handleBack() {
        navigation.goBack()
    }

    function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
        setOption(optionSelected);
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <HeaderActionsContainer>
                            <BackButton
                                color='white'
                                onPress={handleBack}
                            />
                            <HeaderTitle>
                                Editar Perfil
                            </HeaderTitle>
                            <LogoutButton>
                                <IconButton name='power' size={RFValue(24)} />
                            </LogoutButton>
                        </HeaderActionsContainer>

                        <PhotoContainer>
                            <Photo
                                source={{ uri: 'https://avatars.githubusercontent.com/u/69438694?v=4' }}
                            />

                            <PhotoEditButton>
                                <IconButton name="camera" size={RFValue(24)} />
                            </PhotoEditButton>
                        </PhotoContainer>
                    </Header>

                    <Content style={{ marginBottom: useBottomTabBarHeight() }}>
                        <ProfileOptions>
                            <Option
                                active={option === 'dataEdit'}
                                onPress={() => handleOptionChange('dataEdit')}
                            >
                                <OptionTitle active={option === 'dataEdit'}>
                                    Dados
                                </OptionTitle>
                            </Option>
                            <Option
                                active={option === 'passwordEdit'}
                                onPress={() => handleOptionChange('passwordEdit')}
                            >
                                <OptionTitle active={option === 'passwordEdit'}>
                                    Trocar senha
                                </OptionTitle>
                            </Option>
                        </ProfileOptions>

                        {
                            option === 'dataEdit' ?
                                <Section>
                                    <WrapperInput>
                                        <Input
                                            iconName='user'
                                            placeholder='Nome'
                                            autoCorrect={false}
                                            defaultValue={user.name}
                                        />
                                    </WrapperInput>

                                    <WrapperInput>
                                        <Input
                                            iconName='mail'
                                            placeholder='E-mail'
                                            autoCorrect={false}
                                            autoCapitalize='none'
                                            editable={false}
                                            defaultValue={user.email}
                                        />
                                    </WrapperInput>

                                    <Input
                                        iconName='credit-card'
                                        placeholder='CNH'
                                        autoCorrect={false}
                                        keyboardType='numeric'
                                        defaultValue={user.driver_license}
                                    />
                                </Section>
                                :
                                <Section>
                                    <WrapperInput>
                                        <PasswdInput
                                            iconName='lock'
                                            placeholder='Senha atual'
                                        />
                                    </WrapperInput>

                                    <WrapperInput>
                                        <PasswdInput
                                            iconName='lock'
                                            placeholder='Senha'
                                        />
                                    </WrapperInput>

                                    <PasswdInput
                                        iconName='lock'
                                        placeholder='Repetir senha'
                                    />
                                </Section>
                        }
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}