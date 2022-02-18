import React from 'react';
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
    function handleBack() {
        navigation.goBack()
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
                    <Option active={true}>
                        <OptionTitle active={true}>
                            Dados
                        </OptionTitle>
                    </Option>
                    <Option active={false}>
                        <OptionTitle active={false}>
                            Trocar senha
                        </OptionTitle>
                    </Option>
                </ProfileOptions>
            </Content>
        </Container>
    );
}