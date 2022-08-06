import * as React from 'react'
import {
  Text,
  Appbar,
  FAB,
  Portal,
  useTheme,
  Divider,
  List,
} from 'react-native-paper'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  getFocusedRouteNameFromRoute,
  NavigatorScreenParams,
  ParamListBase,
  useIsFocused,
} from '@react-navigation/native'
import MainLayoutContainer from '~/components/MainLayoutContainer'

export default function SettingScreen({ navigation, options }) {
  const theme = useTheme()
  const placeholder = `https://unsplash.it/300/300/?random&__id=1`

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <ScrollView>
          <View style={styles.header}>
            <Image source={{ uri: placeholder }} style={styles.photo} />
            <View style={{ padding: 8 }}>
              <View>
                <Text variant="titleMedium">Valérie, 30</Text>
                <Divider
                  style={{
                    backgroundColor: theme.colors.primary,
                    marginTop: 8,
                  }}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <Text variant="bodyMedium">
                  Ante in nibh mauris, cursus mattis molestie a, iaculis at erat
                  pellentesque adipiscing commodo elit, at imperdiet dui
                  accumsan sit? Suspendisse interdum consectetur libero,{'\n'}
                  {'\n'}
                  id faucibus nisl tincidunt eget nullam non nisi est, sit amet
                  Ante in nibh mauris, cursus mattis molestie a, iaculis at erat
                  pellentesque adipiscing commodo elit, at imperdiet dui {'\n'}
                  accumsan sit? Suspendisse interdum consectetur libero, id
                  faucibus nisl tincidunt eget nullam non nisi est, sit amet
                  facilisis magna etiam tempor, orci eu? In hac habitasse platea
                  risus, quis varius quam quisque id diam vel quam elementum
                  {'\n'}
                  {'\n'}
                  pulvinar etiam non quam lacus suspendisse faucibus interdum
                  posuere! Facilisi etiam dignissim diam quis enim lobortis
                  scelerisque fermentum dui faucibus in!
                </Text>
              </View>
              <Divider
                style={{ backgroundColor: theme.colors.primary, marginTop: 16 }}
              />
              <View>
                <List.Section>
                  <List.Item
                    style={{ padding: 0, height: 32 }}
                    titleStyle={{ fontSize: 14, marginLeft: -10 }}
                    left={(props) => (
                      <List.Icon
                        {...props}
                        style={{ padding: 0, margin: 0, marginLeft: -10 }}
                        color={theme.colors.primary}
                        icon={() => (
                          <MaterialCommunityIcons
                            name="map-marker"
                            color={theme.colors.primary}
                            size={20}
                          />
                        )}
                      />
                    )}
                    title="Located in Antwerp, Belgium"
                  />
                  <List.Item
                    style={{ padding: 0, height: 32 }}
                    titleStyle={{ fontSize: 14, marginLeft: -10 }}
                    left={(props) => (
                      <List.Icon
                        {...props}
                        style={{
                          padding: 0,
                          margin: 0,
                          marginLeft: -10,
                        }}
                        icon={() => (
                          <MaterialCommunityIcons
                            name="home"
                            color={theme.colors.primary}
                            size={20}
                          />
                        )}
                      />
                    )}
                    title="From Deurne, Belgium"
                  />
                  <List.Item
                    style={{ padding: 0, height: 32 }}
                    titleStyle={{ fontSize: 14, marginLeft: -10 }}
                    left={(props) => (
                      <List.Icon
                        {...props}
                        style={{
                          padding: 0,
                          margin: 0,
                          marginLeft: -10,
                        }}
                        icon={() => (
                          <MaterialCommunityIcons
                            name="web"
                            color={theme.colors.primary}
                            size={20}
                          />
                        )}
                      />
                    )}
                    title="English, French, Netherlands"
                  />
                </List.Section>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.fabs}>
          <FAB
            icon="close"
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              borderRadius: 30,
              bottom: 12,
              left: 64,
            }}
            onPress={() => {}}
            customSize={64}
            color={theme.colors.primary}
          />
          <FAB
            icon="check"
            style={{
              backgroundColor: theme.colors.primary,
              position: 'absolute',
              borderRadius: 30,
              bottom: 12,
              right: 64,
            }}
            onPress={() => {}}
            customSize={64}
            color="white"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  grid: {
    flex: 1,
  },
  photo: {
    flex: 1,
    width: 400,
    height: 400,
    resizeMode: 'cover',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    paddingBottom: 80,
  },
  fabs: {},
  fab: {
    margin: 8,
  },
})
