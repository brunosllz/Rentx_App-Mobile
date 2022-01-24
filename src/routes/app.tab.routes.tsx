import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { Home } from '../screens/Home';
import { MyCar } from "../screens/MyCar";
import { AppStackRoutes } from "./app.stack.routes";
import { useTheme } from "styled-components";

const { Navigator, Screen } = createBottomTabNavigator();

import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import PeopleSvg from '../assets/peopleMenu.svg';
import { RFValue } from "react-native-responsive-fontsize";

export function AppTabRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.COLORS.primary,
                tabBarInactiveTintColor: theme.COLORS.text_detail,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 79,
                    backgroundColor: theme.COLORS.background_primary
                },
                headerShown: false
            }}
        >
            <Screen
                name="Main"
                component={AppStackRoutes}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg width={RFValue(24)} height={RFValue(24)} fill={color} />)
                }}
            />
            <Screen
                name="MyCar"
                component={MyCar}
                options={{
                    tabBarIcon: ({ color }) => (
                        <CarSvg width={RFValue(24)} height={RFValue(24)} fill={color} />)
                }}
            />
            <Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <PeopleSvg width={RFValue(24)} height={RFValue(24)} fill={color} />)
                }}
            />
        </Navigator>
    )
}