import * as React from 'react'

import { StyleSheet, Image, View, ScrollView } from 'react-native'
import {
  Appbar,
  Caption,
  List,
  Text,
  Divider,
  useTheme,
} from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { messages } from '~/data/mocks'

function AppBar({ colors }) {
  return (
    <Appbar.Header
      mode="small"
      style={{
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1,
      }}
    >
      <Appbar.Content
        style={{ marginLeft: -40 }}
        titleStyle={{ marginLeft: 0, color: colors.secondary }}
        title="My Account"
      />
    </Appbar.Header>
  )
}

export default function SettingsScreen({ navigation, route }) {
  const items = messages
  const { colors } = useTheme()
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <AppBar colors={colors} />,
    })
  })

  return (
    <>
      <Text>Hello</Text>
    </>
  )
}
