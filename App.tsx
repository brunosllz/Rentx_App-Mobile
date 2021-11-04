import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

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
import { Home } from './src/screens/Home';

export default function App() {
  const [fontLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium
  })

  if(!fontLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar style='light'/>
        <Home />
      </>
    </ThemeProvider>
  );
}