import * as React from 'react'

import { View, ScrollView } from 'react-native'
import AccountScreen from '~/screens/accounts/AccountScreen'
import SettingsScreen from '~/screens/accounts/SettingsScreen'

import {
  createNativeStackNavigator,
  HeaderStyleInterpolators,
  StackScreenProps,
  TransitionPresets,
} from '@react-navigation/native-stack'

export default function AccountNavigation({ navigation, route }) {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  )
}
