import * as React from 'react'
import { registerRootComponent } from 'expo'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

import Navigation from '~/navigation'
import useCachedResources from '~/hooks/useCachedResources'
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
}

export type ThemeOverride = typeof theme

function App() {
  const isLoadingComplete = useCachedResources()
  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <React.Fragment>
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
            <StatusBar />
          </React.Fragment>
        </PaperProvider>
      </SafeAreaProvider>
    )
  }
}
export default registerRootComponent(App)
