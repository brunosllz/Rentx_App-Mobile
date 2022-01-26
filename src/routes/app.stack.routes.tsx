import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Corfimation } from "../screens/Confirmation";
import { MyCar } from "../screens/MyCar";

import { AppTabRoutes } from "./app.tab.routes";
const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
        >
            <Screen
                name="Home"
                component={AppTabRoutes}
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