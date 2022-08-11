import * as React from 'react'

import { StyleSheet } from 'react-native'
import { Appbar, Text, useTheme } from 'react-native-paper'
import MainLayoutContainer from '~/components/MainLayoutContainer'

function AppBar({ navigation }) {
  return (
    <Appbar.Header elevated={false} mode="small">
      <Appbar.BackAction onPress={() => navigation.pop()} />
      <Appbar.Content title="Profile" />
    </Appbar.Header>
  )
}

export default function ProfileScreen({ navigation, route }) {
  const theme = useTheme()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <AppBar navigation={navigation} />,
    })
  })

  return (
    <MainLayoutContainer withNavBar={false}>
      <Text>Profile</Text>
    </MainLayoutContainer>
  )
}

const styles = StyleSheet.create({})
