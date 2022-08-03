import * as React from 'react'
import { registerRootComponent } from 'expo'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  Appbar,
} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainNavigation from '~/navigation/MainNavigation'
import useCachedResources from '~/hooks/useCachedResources'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(103, 80, 164, 1)',
    primaryContainer: 'rgba(234, 221, 255, 1)',
    secondary: 'rgba(98, 91, 113, 1)',
    secondaryContainer: 'rgba(232, 222, 248, 1)',
    tertiary: 'rgba(125, 82, 96, 1)',
    tertiaryContainer: 'rgba(255, 216, 228, 1)',
    surface: 'rgba(255, 251, 254, 1)',
    surfaceVariant: 'rgba(231, 224, 236, 1)',
    surfaceDisabled: 'rgba(28, 27, 31, 0.12)',
    background: 'rgba(255, 251, 254, 1)',
    error: 'rgba(179, 38, 30, 1)',
    errorContainer: 'rgba(249, 222, 220, 1)',
    onPrimary: 'rgba(255, 255, 255, 1)',
    onPrimaryContainer: 'rgba(33, 0, 93, 1)',
    onSecondary: 'rgba(255, 255, 255, 1)',
    onSecondaryContainer: 'rgba(29, 25, 43, 1)',
    onTertiary: 'rgba(255, 255, 255, 1)',
    onTertiaryContainer: 'rgba(49, 17, 29, 1)',
    onSurface: 'rgba(28, 27, 31, 1)',
    onSurfaceVariant: 'rgba(73, 69, 79, 1)',
    onSurfaceDisabled: 'rgba(28, 27, 31, 0.38)',
    onError: 'rgba(255, 255, 255, 1)',
    onErrorContainer: 'rgba(65, 14, 11, 1)',
    onBackground: 'rgba(28, 27, 31, 1)',
    outline: 'rgba(121, 116, 126, 1)',
    shadow: 'rgba(0, 0, 0, 1)',
    inverseSurface: 'rgba(49, 48, 51, 1)',
    inverseOnSurface: 'rgba(244, 239, 244, 1)',
    inversePrimary: 'rgba(208, 188, 255, 1)',
  },
}

export type ThemeOverride = typeof theme

const Stack = createNativeStackNavigator<any>()

function App() {
  const isLoadingComplete = useCachedResources()
  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <React.Fragment>
            <StatusBar translucent backgroundColor="rgba(255, 255, 255, 1)" />
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen
                  name="Navigation"
                  key={'navigation'}
                  component={MainNavigation}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </React.Fragment>
        </PaperProvider>
      </SafeAreaProvider>
    )
  }
}
export default registerRootComponent(App)
