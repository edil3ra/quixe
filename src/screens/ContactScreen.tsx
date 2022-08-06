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
import MainLayoutContainer from '~/components/MainLayoutContainer'

import { format } from 'date-fns'

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
        title="Messages"
      />
      <Appbar.Action
        icon={() => (
          <MaterialCommunityIcons
            name="magnify"
            color={colors.secondary}
            size={26}
          />
        )}
        color="red"
        onPress={() => {}}
      />
    </Appbar.Header>
  )
}

export default function ContactScreen({ navigation, route }) {
  const items = messages
  const { colors } = useTheme()
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <AppBar colors={colors} />,
    })
  })

  return (
    <MainLayoutContainer withScrollView>
      <List.Section>
        <List.Subheader>Recent Messages</List.Subheader>
        {items.map((item) => {
          return (
            <>
              <List.Item
                left={() => (
                  <Image
                    source={require('~/assets/images/favicon.png')}
                    style={styles.image}
                  />
                )}
                title={({ color: titleColor, fontSize }) => (
                  <View
                    style={[styles.container, styles.row, styles.customTitle]}
                  >
                    <Text style={{ color: titleColor, fontSize }}>
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
                      numberOfLines={1}
                      ellipsizeMode={'tail'}
                      style={{ color: descriptionColor, fontSize }}
                    >
                      {item.content}
                    </Text>
                  </View>
                )}
              />
              <Divider bold />
            </>
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
