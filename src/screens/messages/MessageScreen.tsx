import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Appbar,
  Text,
  Divider,
  Surface,
  useTheme,
  Paragraph,
} from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons'

import { format } from 'date-fns'

import MainLayoutContainer from '~/components/MainLayoutContainer'
import { messages } from '~/data/mocks'

function FromMessage() {
  const theme = useTheme()
  return (
    <View style={styles.row}>
      <Surface elevation="1">
        <Paragraph style={styles.messageText}>
          Ut faucibus pulvinar elementum integer enim neque, volutpat ac
          tincidunt vitae, semper quis. Egestas diam in arcu cursus euismod quis
          viverra nibh cras pulvinar mattis nunc, sed blandit libero volutpat.
        </Paragraph>
        <View style={styles.messageFooter}>
          <View style={styles.messageDate}>
            <Text variant="bodySmall" style={{ color: theme.colors.secondary }}>
              {format(new Date('2016-11-15 03:23:53'), "hh:mm aaaaa'm'")}
            </Text>
          </View>
        </View>
      </Surface>
    </View>
  )
}

function ToMessage() {
  const theme = useTheme()
  return (
    <View style={styles.row}>
      <Surface elevation="5">
        <Paragraph style={styles.messageText}>
          Ut faucibus pulvinar elementum integer enim neque, volutpat ac
          tincidunt vitae, semper quis. Egestas diam in arcu cursus euismod quis
          tincidunt vitae, semper quis. Egestas diam in arcu cursus {'\n'}{' '}
          {'\n'}
          euismod quis tincidunt vitae, semper quis. Egestas diam in arcu cursus
          euismod quis viverra nibh cras pulvinar mattis nunc, sed blandit
          libero volutpat.
        </Paragraph>

        <View style={styles.messageFooter}>
          <View style={styles.messageDate}>
            <Ionicons name="md-checkmark-done" size={16} color="green" />
            {/* <Ionicons name="md-checkmark" size={20} color="green" /> */}
          </View>
          <View style={styles.messageMark}>
            <Text variant="bodySmall" style={{ color: theme.colors.secondary }}>
              {format(new Date('2016-11-15 03:23:53'), "hh:mm aaaaa'm'")}
            </Text>
          </View>
        </View>
      </Surface>
    </View>
  )
}

function AppBar({ navigation }) {
  return (
    <Appbar.Header elevated={false} mode="small">
      <Appbar.BackAction onPress={() => navigation.pop()} />
      <Appbar.Content title="Message" />
    </Appbar.Header>
  )
}

export default function MessageScreen({ navigation, route }) {
  const theme = useTheme()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <AppBar navigation={navigation} />,
    })
  })

  return (
    <MainLayoutContainer withScrollView>
      <View style={styles.container}>
        <View style={styles.left}>
          <FromMessage />
          <FromMessage />
        </View>

        <View style={styles.right}>
          <ToMessage />
        </View>
        <View style={styles.left}>
          <FromMessage />
        </View>
        <View style={styles.right}>
          <ToMessage />
          <ToMessage />
          <ToMessage />
        </View>
        <Divider />
      </View>
    </MainLayoutContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 8,
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 2,
    width: '82%',
  },
  left: {
    paddingTop: 4,
    alignItems: 'flex-start',
  },
  right: {
    paddingTop: 6,
    alignItems: 'flex-end',
  },
  messageText: {
    padding: 6,
  },

  messageFooter: {
    flex: 1,
    flexDirection: 'row-reverse',
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  messageDate: {},
  messageMark: {},
})
