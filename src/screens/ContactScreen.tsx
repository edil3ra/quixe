import { format } from 'date-fns'

import * as React from 'react'
import { Appbar } from 'react-native-paper'
import { StyleSheet, Image, View, ScrollView } from 'react-native'
import { Caption, List, Text, Divider } from 'react-native-paper'
import { messages } from '~/data/mocks'
export default function ContactScreen() {
  const items = messages

  return (
    <>
      <Appbar.Header elevated>
        <Appbar.Content title="Messages" />
      </Appbar.Header>
      <ScrollView>
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
      </ScrollView>
    </>
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
