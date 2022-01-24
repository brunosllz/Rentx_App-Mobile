import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Corfimation } from "../screens/Confirmation";
import { MyCar } from "../screens/MyCar";
import { Splash } from "../screens/Splash";
import { Signin } from "../screens/Signin";
import { SignupFirstStep } from "../screens/Signup/SignupFirstStep";
import { SignupSecoundStep } from "../screens/Signup/SignupSecoundStep";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Splash"
        >
            <Screen
                name="Splash"
                component={Splash}
            />
            <Screen
                name="Signin"
                component={Signin}
            />
            <Screen
                name="SignupFirstStep"
                component={SignupFirstStep}
            />
            <Screen
                name="SignupSecoundStep"
                component={SignupSecoundStep}
            />
            <Screen
                name="Corfimation"
                component={Corfimation}
            />
        </Navigator>
    )
}