import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hook/auth';

import { AuthRoutes } from './auth.routes';
import { AppStackRoutes } from './app.stack.routes';
import { LoadAnimation } from '../components/LoadAnimation';

export function Routes() {
    const { user, loading } = useAuth();

    return (
        loading ? <LoadAnimation /> :
            <NavigationContainer>
                {user.id ? <AppStackRoutes /> : <AuthRoutes />}
            </NavigationContainer>
    );
}