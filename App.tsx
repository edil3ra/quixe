import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

import Navigation from './navigation/Navigation'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={DefaultTheme}>
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
