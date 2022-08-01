import * as React from 'react'
import MatchScreen from '~/screens/MatchScreen'
import ContactScreen from '~/screens/ContactScreen'
import MessageScreen from '~/screens/MessageScreen'
import MapScreen from '~/screens/MapScreen'
import SettingScreen from '~/screens/SettingScreen'
import { createMaterialBottomTabNavigator } from '~/vendors/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'react-native-paper'

import {
  getFocusedRouteNameFromRoute,
  NavigatorScreenParams,
  ParamListBase,
  useIsFocused,
} from '@react-navigation/native'
import { StyleSheet, Easing } from 'react-native'
import { Appbar } from 'react-native-paper'
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

// const Tab = createMaterialBottomTabNavigator<MainTabParams>()
const Tab = createBottomTabNavigator<BottomTabParams>()

export default function MainNavigation({ navigation, route }) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Matches'
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    appBarHeader: {
      backgroundColor: colors.inverseSurface,
    },
  })

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <Appbar.Header
          style={styles.appBarHeader}
          elevated={false}
          mode="small"
        >
          <Appbar.Content
            titleStyle={{
              color: colors.onPrimary,
            }}
            title={routeName}
          />
        </Appbar.Header>
      ),
    })
  }, [navigation, routeName])

  const tabBarItemStyleActive = {
    borderTopWidth: 2,
    borderTopColor: 'orange',
  }

  const tabBarItemStyleInactive = {
    borderTopWidth: 2,
    borderTopColor: colors.surfaceVariant,
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.onSurface,
        tabBarInactiveBackgroundColor: colors.onSurfaceVariant,
        tabBarActiveTintColor: colors.surface,
        tabBarInactiveTintColor: colors.surfaceVariant,
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
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Settings',
          tabBarIcon: getTabBarIcon('cogs'),
          tabBarItemStyle:
            routeName == 'Settings'
              ? tabBarItemStyleActive
              : tabBarItemStyleInactive,
        }}
      />
    </Tab.Navigator>
  )
}
