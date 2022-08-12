import * as React from 'react'

import AccountScreen from '~/screens/accounts/AccountScreen'
import ProfileScreen from '~/screens/accounts/ProfileScreen'
import PreferenceScreen from '~/screens/accounts/PreferenceScreen'
import InvitationScreen from '~/screens/accounts/InvitationScreen'
import SettingsScreen from '~/screens/accounts/SettingsScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type AccountNavigationParams = {
  AccountScreen: undefined
  ProfileScreen: undefined
  PreferenceScreen: undefined
  InvitationScreen: undefined
  SettingsScreen: undefined
}

export default function AccountNavigation() {
  const Stack = createNativeStackNavigator<AccountNavigationParams>()

  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'float',
        headerShown: false,
      }}
    >
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="PreferenceScreen" component={PreferenceScreen} />
      <Stack.Screen name="InvitationScreen" component={InvitationScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  )
}
