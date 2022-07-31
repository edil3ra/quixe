import * as React from 'react'
import MatchScreen from '~/screens/MatchScreen'
import ContactScreen from '~/screens/ContactScreen'
import MessageScreen from '~/screens/MessageScreen'
import MapScreen from '~/screens/MapScreen'
import SettingScreen from '~/screens/SettingScreen'
import { createMaterialBottomTabNavigator } from '~/vendors/material-bottom-tabs'

type MaterialBottomTabParams = {
  TabStack: NavigatorScreenParams<SimpleStackParams>
  TabAlbums: undefined
  TabContacts: undefined
  TabChat: undefined
}

const Tab = createMaterialBottomTabNavigator<MaterialBottomTabParams>()

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Match"
      options={{
        title: 'My home',
      }}
    >
      <Tab.Screen
        name="Match"
        component={MatchScreen}
        options={{
          title: 'Match',
          tabBarIcon: 'inbox',
          tabBarLabel: 'Article',
          tabBarIcon: 'file-document',
          tabBarColor: '#C9E7F8',
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Map',
          tabBarIcon: 'map',
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'Messages',
          tabBarIcon: 'message',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Settings',
          tabBarIcon: 'cogs',
        }}
      />
    </Tab.Navigator>
  )
}
