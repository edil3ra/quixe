import * as React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'react-native-paper'

import MatchScreen from '~/screens/MatchScreen'
import ContactScreen from '~/screens/ContactScreen'
import MapScreen from '~/screens/MapScreen'
import AccountNavigation from '~/navigation/AccountNavigation'

import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

export type MainTabParams = {
  MatchScreen: undefined
  MapScreen: undefined
  ContactScreen: undefined
  AccountNavigation: undefined
}

const getTabBarIcon =
  (name: string) =>
  ({ color }: { color: string; size: number }) =>
    <MaterialCommunityIcons name={name} color={color} size={22} />

const Tab = createBottomTabNavigator<MainTabParams>()

export default function MainNavigation({ navigation, route }) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'ContactScreen'
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
      initialRouteName="AccountNavigation"
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
        name="MatchScreen"
        component={MatchScreen}
        options={{
          title: 'Matches',
          tabBarIcon: getTabBarIcon('lightning-bolt'),
          tabBarItemStyle:
            routeName === 'Matches'
              ? tabBarItemStyleActive
              : tabBarItemStyleInactive,
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: 'Map',
          tabBarIcon: getTabBarIcon('map'),
          tabBarItemStyle:
            routeName === 'Map'
              ? tabBarItemStyleActive
              : tabBarItemStyleInactive,
        }}
      />
      <Tab.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          title: 'Messages',
          tabBarIcon: getTabBarIcon('message'),
          tabBarItemStyle:
            routeName === 'Contact'
              ? tabBarItemStyleActive
              : tabBarItemStyleInactive,
        }}
      />
      <Tab.Screen
        name="AccountNavigation"
        component={AccountNavigation}
        listeners={() => ({
          tabPress: () => {
            navigation.navigate(route.name)
          },
        })}
        options={{
          title: 'Accounts',
          tabBarIcon: getTabBarIcon('account'),
          tabBarItemStyle:
            routeName === 'Accounts'
              ? tabBarItemStyleActive
              : tabBarItemStyleInactive,
        }}
      />
    </Tab.Navigator>
  )
}
