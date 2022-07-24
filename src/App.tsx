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
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'

function App() {
  const isLoadingComplete = useCachedResources()
  const isLoadingthtehthComplete = useCachedResources()
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
export default registerRootComponent(App)
