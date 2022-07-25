import * as React from 'react'
import MatchScreen from '~/screens/MatchScreen'
import ContactScreen from '~/screens/ContactScreen'
import MapScreen from '~/screens/MapScreen'
import SettingScreen from '~/screens/SettingScreen'
import { createMaterialBottomTabNavigator } from '~/vendors/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="match"
      inactiveColor="#fff000"
      options={{
        title: 'My home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
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
        component={ContactScreen}
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
