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

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
        >
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
                name="Home"
                component={Home}
            />
            <Screen
                name="MyCar"
                component={MyCar}
            />
            <Screen
                name="CarDetails"
                component={CarDetails}
            />
            <Screen
                name="Scheduling"
                component={Scheduling}
            />
            <Screen
                name="SchedulingDetails"
                component={SchedulingDetails}
            />
            <Screen
                name="Corfimation"
                component={Corfimation}
            />
        </Navigator>
    )
}