import * as React from 'react'

import MessagesScreen from '~/screens/messages/MessagesScreen'
import MessageScreen from '~/screens/messages/MessageScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type MessagesNavigationParams = {
  ContactScreen: undefined
  MessageScreen: undefined
}

export default function AccountNavigation() {
  const Stack = createNativeStackNavigator<MessagesNavigationParams>()

  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'float',
        headerShown: false,
      }}
    >
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
    </Stack.Navigator>
  )
}
