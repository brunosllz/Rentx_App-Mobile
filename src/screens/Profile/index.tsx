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
    OptionTitle
} from './styles';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { RFValue } from 'react-native-responsive-fontsize';

interface NavigationProps {
    goBack: () => void;
}

export function Profile() {
    const navigation = useNavigation<NavigationProps>();
    const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');

    function handleBack() {
        navigation.goBack()
    }

    function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
        setOption(optionSelected);
    }

    return (
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

            <Content>
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
            </Content>
        </Container>
    );
}