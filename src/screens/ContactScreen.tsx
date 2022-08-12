import * as React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import {
  Appbar,
  Caption,
  List,
  Text,
  useTheme,
  TouchableRipple,
} from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MainLayoutContainer from '~/components/MainLayoutContainer'

import { format } from 'date-fns'

import { messages } from '~/data/mocks'

function AppBar({ theme }) {
  return (
    <Appbar.Header
      mode="small"
      style={{
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 1,
      }}
    >
      <Appbar.Content
        style={{ marginLeft: -40 }}
        titleStyle={{ marginLeft: 0, color: theme.colors.secondary }}
        title="Messages"
      />
      <Appbar.Action
        icon={() => (
          <MaterialCommunityIcons
            name="magnify"
            color={theme.colors.secondary}
            size={26}
          />
        )}
        onPress={() => {}}
      />
    </Appbar.Header>
  )
}

export default function ContactScreen({ navigation, route }) {
  const items = messages
  const theme = useTheme()
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <AppBar theme={theme} />,
    })
  })

  return (
    <MainLayoutContainer withScrollView>
      <List.Section>
        <List.Subheader style={{ color: 'grey', paddingVertical: 10 }}>
          Recent Messages
        </List.Subheader>
        {items.map((item) => {
          return (
            <TouchableRipple
              key={item.name}
              style={styles.ripple}
              onPress={() => {}}
              rippleColor={theme.colors.tertiary}
            >
              <List.Item
                left={() => (
                  <Image
                    source={require('~/assets/images/avatar.png')}
                    style={styles.image}
                  />
                )}
                title={({ color: titleColor, fontSize }) => (
                  <View
                    style={[styles.container, styles.row, styles.customTitle]}
                  >
                    <Text
                      variant="titleSmall"
                      style={{ color: titleColor, fontSize }}
                    >
                      {item.name}
                    </Text>
                    <Caption>
                      {format(new Date(item.createdAt), 'yy-mm-dd')}
                    </Caption>
                  </View>
                )}
                description={({ color: descriptionColor, fontSize }) => (
                  <View
                    style={[
                      styles.container,
                      styles.column,
                      styles.description,
                    ]}
                  >
                    <Text
                      variant="bodySmall"
                      numberOfLines={1}
                      ellipsizeMode={'tail'}
                      style={{ color: descriptionColor, fontSize }}
                    >
                      {item.content}
                    </Text>
                  </View>
                )}
              />
            </TouchableRipple>
          )
        })}
      </List.Section>
    </MainLayoutContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 40,
    width: 40,
    margin: 8,
    borderRadius: 100,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  customTitle: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  additionalPadding: {
    paddingTop: 8,
  },
  description: {
    width: '80%',
  },
})
