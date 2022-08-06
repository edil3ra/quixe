import * as React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'react-native-paper'

import MatchScreen from '~/screens/MatchScreen'
import ContactScreen from '~/screens/ContactScreen'
import MessageScreen from '~/screens/MessageScreen'
import MapScreen from '~/screens/MapScreen'
import SettingScreen from '~/screens/SettingScreen'
import { createMaterialBottomTabNavigator } from '~/vendors/material-bottom-tabs'

import {
  getFocusedRouteNameFromRoute,
  NavigatorScreenParams,
  ParamListBase,
  useIsFocused,
} from '@react-navigation/native'
import { StyleSheet, Easing } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type MainTabParams = {
  Match: undefined
  Map: undefined
  Contact: undefined
  Setting: undefined
}

const getTabBarIcon =
  (name: string) =>
  ({ color, size }: { color: string; size: number }) =>
    <MaterialCommunityIcons name={name} color={color} size={22} />

const Tab = createBottomTabNavigator<BottomTabParams>()

export default function MainNavigation({ navigation, route }) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Contact'
  const { colors } = useTheme()

  const tabBarItemStyleActive = {
    borderTopWidth: 1,
    borderTopColor: colors.primary,
  }

  const tabBarItemStyleInactive = {
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
  }

  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: { fontSize: 14, paddingBottom: 1 },
      }}
    >
      <Tab.Screen
        name="Matches"
        component={MatchScreen}
        options={{
          title: 'Matches',
          tabBarIcon: getTabBarIcon('file-document'),
          tabBarItemStyle:
            routeName == 'Matches'
              ? tabBarItemStyleActive
              : tabBarItemStyleInactive,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Map',
          tabBarIcon: getTabBarIcon('map'),
          tabBarItemStyle:
            routeName == 'Map'
              ? tabBarItemStyleActive
              : tabBarItemStyleInactive,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'Messages',
          tabBarIcon: getTabBarIcon('message'),
          tabBarItemStyle:
            routeName == 'Contact'
              ? tabBarItemStyleActive
              : tabBarItemStyleInactive,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          title: 'Settings',
          tabBarIcon: getTabBarIcon('account'),
          tabBarItemStyle:
            routeName == 'Settings'
              ? tabBarItemStyleActive
              : tabBarItemStyleInactive,
        }}
      />
    </Tab.Navigator>
  )
}
