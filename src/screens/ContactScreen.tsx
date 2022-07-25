import { format } from 'date-fns'

import * as React from 'react'
import { Appbar } from 'react-native-paper'
import { StyleSheet, Image, View, ScrollView } from 'react-native'
import { Caption, List, Text, Divider } from 'react-native-paper'
export default function ContactScreen() {
  const items = [
    {
      name: 'johnsondonald',
      date: '2015-09-13 19:22:49',
      description:
        'Analysis help stock win threat human. Example middle remain center catch five.',
    },
    {
      name: 'jgrant',
      date: '1995-08-20 06:10:26',
      description:
        'Ground another word want hundred. Us single appear serve serious.',
    },
    {
      name: 'moorejoseph',
      date: '2008-09-18 15:56:36',
      description: 'Control spring now pressure actually medical down.',
    },
    {
      name: 'simmonsmichael',
      date: '2006-03-21 02:38:36',
      description: 'Whom pattern manager beautiful election news remain.',
    },
    {
      name: 'mathismichelle',
      date: '2017-01-13 07:50:31',
      description:
        'Position floor somebody mind cell rich to. First face challenge TV make member.',
    },
    {
      name: 'johnsondennis',
      date: '2008-07-22 00:08:49',
      description:
        'Lay west fear energy. Guy us friend keep take remember situation.',
    },
    {
      name: 'ayalaanthony',
      date: '1989-11-29 13:59:34',
      description:
        'Today police development could the alone agency. Consider kind garden might.',
    },
    {
      name: 'qgarner',
      date: '1996-10-14 16:31:51',
      description:
        'Cell wonder your forward need range southern. Product beyond be condition.',
    },
    {
      name: 'erin91',
      date: '1972-06-11 19:58:56',
      description: 'Experience today statement scientist.',
    },
    {
      name: 'qnguyen',
      date: '1992-09-12 04:35:37',
      description: 'What itself result onto trip cultural.',
    },
  ]

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
                        {format(new Date(item.date), 'yy-mm-dd')}
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
                        {item.description}
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
