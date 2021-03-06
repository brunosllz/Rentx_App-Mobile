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
    PhotoSelectButton,
    Content,
    ProfileOptions,
    Option,
    OptionTitle,
    Section,
    WrapperInput,
    WrapperButton
} from './styles';
import {
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import { useAuth } from '../../hook/auth';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import * as Yup from 'yup';

import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { PasswdInput } from '../../components/PasswdInput';
import { Button } from '../../components/Button';

interface NavigationProps {
    goBack: () => void;
}

export function Profile() {
    const { user, signOut, userProfileUpdated } = useAuth();

    const [avatar, setAvatar] = useState(user.avatar || null);
    const [name, setName] = useState(user.name);
    const [driverLicense, setDriverLicense] = useState(user.driver_license);

    const navigation = useNavigation<NavigationProps>();
    const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');

    function handleBack() {
        navigation.goBack()
    }

    function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
        setOption(optionSelected);
    }

    async function handleSelectAvatar() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        });

        if (result.cancelled) {
            return;
        }
        const { uri } = result as ImageInfo;
        if (uri) {
            setAvatar(uri);
        }
    }

    async function handleUserProfileUpdated() {
        try {
            const schema = Yup.object().shape({
                driverLicense: Yup.string().required('CNH ?? obrigrat??ria.'),
                name: Yup.string().required('Nome ?? obrigat??rio.')
            });

            const data = { name, driverLicense };
            await schema.validate(data);

            userProfileUpdated({
                id: user.id,
                user_id: user.user_id,
                email: user.email,
                name: name,
                driver_license: driverLicense,
                avatar: avatar,
                token: user.token
            });

            Alert.alert('Perfil atulizado!');
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Ops', error.message)
            } else {
                Alert.alert('N??o foi poss??vel atulizar os dados do perfil!')
            }
        }
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
                            {/* implementar a logica, para informar o us??rio de realmente deseja sair da aplica????o */}
                            <LogoutButton onPress={signOut}>
                                <IconButton name='power' size={RFValue(24)} />
                            </LogoutButton>
                        </HeaderActionsContainer>

                        <PhotoContainer>
                            <Photo
                                source={{ uri: avatar }}
                            />

                            <PhotoSelectButton onPress={handleSelectAvatar}>
                                <IconButton name="camera" size={RFValue(24)} />
                            </PhotoSelectButton>
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
                                            onChangeText={setName}
                                            defaultValue={name}
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
                                        defaultValue={driverLicense}
                                        onChangeText={setDriverLicense}
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
                        <WrapperButton>
                            <Button
                                title='Salvar altera????es'
                                color='red'
                                onPress={handleUserProfileUpdated}
                            />
                        </WrapperButton>
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}