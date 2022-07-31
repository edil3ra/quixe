import * as React from 'react'
import { registerRootComponent } from 'expo'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainNavigation from '~/navigation/MainNavigation'
import useCachedResources from '~/hooks/useCachedResources'
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
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
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.24)" />
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Navigation"
                  key={'scree'}
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
