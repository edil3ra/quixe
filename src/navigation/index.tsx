import * as React from 'react'
import MatchScreen from '~/screens/MatchScreen'
import ContactScreen from '~/screens/ContactScreen'
import MessageScreen from '~/screens/MessageScreen'
import MapScreen from '~/screens/MapScreen'
import SettingScreen from '~/screens/SettingScreen'
import { createMaterialBottomTabNavigator } from '~/vendors/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="contact"
      options={{
        title: 'My home',
      }}
    >
      <Tab.Screen
        name="match"
        component={MatchScreen}
        options={{
          title: 'Match',
          tabBarIcon: 'inbox',
        }}
      />
      <Tab.Screen
        name="map"
        component={MapScreen}
        options={{
          title: 'Map',
          tabBarIcon: 'map',
        }}
      />
      <Tab.Screen
        name="contact"
        component={MessageScreen}
        options={{
          title: 'Messages',
          tabBarIcon: 'message',
        }}
      />
      <Tab.Screen
        name="setting"
        component={SettingScreen}
        options={{
          title: 'Settings',
          tabBarIcon: 'cogs',
        }}
      />
    </Tab.Navigator>
  )
}
