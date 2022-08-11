import * as React from 'react'

import { StyleSheet, Image, View, ScrollView } from 'react-native'
import {
  Appbar,
  Caption,
  List,
  Text,
  Divider,
  useTheme,
  IconButton,
  Avatar,
  TouchableRipple,
} from 'react-native-paper'
import MainLayoutContainer from '~/components/MainLayoutContainer'

export default function AccountScreen({ navigation, route }) {
  const theme = useTheme()

  return (
    <MainLayoutContainer withNavBar={false}>
      <Text>Hello</Text>
    </MainLayoutContainer>
  )
}

const styles = StyleSheet.create({})
