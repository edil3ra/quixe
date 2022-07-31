import * as React from 'react'
import MatchScreen from '~/screens/MatchScreen'
import ContactScreen from '~/screens/ContactScreen'
import MessageScreen from '~/screens/MessageScreen'
import MapScreen from '~/screens/MapScreen'
import SettingScreen from '~/screens/SettingScreen'
import { createMaterialBottomTabNavigator } from '~/vendors/material-bottom-tabs'
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

const Tab = createMaterialBottomTabNavigator<MainTabParams>()

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

  return (
    <Tab.Navigator initialRouteName="Match">
      <Tab.Screen
        name="Matches"
        component={MatchScreen}
        options={{
          title: 'Matches',
          tabBarLabel: 'Matches',
          tabBarIcon: 'file-document',
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
