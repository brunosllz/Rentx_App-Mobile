import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

import {
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';

import theme from './src/global/styles/theme';

import { Routes } from './src/routes';

export default function App() {
  const [fontLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium
  })

  if (!fontLoaded) {
    return <AppLoading />
  }

  LogBox.ignoreLogs(['Warning', 'Console']);
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}