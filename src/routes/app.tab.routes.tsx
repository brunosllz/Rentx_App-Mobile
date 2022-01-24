import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { Home } from '../screens/Home';
import { MyCar } from "../screens/MyCar";
import { AppStackRoutes } from "./app.stack.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="Main"
                component={AppStackRoutes}
            />
            <Screen
                name="MyCar"
                component={MyCar}
            />
            <Screen
                name="Profile"
                component={Home}
            />
        </Navigator>
    )
}