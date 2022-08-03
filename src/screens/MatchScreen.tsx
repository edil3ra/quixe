import * as React from 'react'
import {
  Text,
  Appbar,
  FAB,
  Portal,
  useTheme,
  Divider,
} from 'react-native-paper'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  getFocusedRouteNameFromRoute,
  NavigatorScreenParams,
  ParamListBase,
  useIsFocused,
} from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function SettingScreen({ navigation, options }) {
  const { colors } = useTheme()
  const placeholder = `https://unsplash.it/300/300/?random&__id=1`

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <ScrollView>
          <View style={styles.header}>
            <Image source={{ uri: placeholder }} style={styles.photo} />
            <Text>
              Ante in nibh mauris, cursus mattis molestie a, iaculis at erat
              pellentesque adipiscing commodo elit, at imperdiet dui accumsan
              sit? Suspendisse interdum consectetur libero, id faucibus nisl
              tincidunt eget nullam non nisi est, sit amet facilisis magna etiam
              tempor, orci eu? In hac habitasse platea dictumst quisque
              sagittis, purus sit amet volutpat consequat! Vitae ultricies leo
              integer malesuada nunc vel risus commodo? Eget lorem dolor, sed
              viverra ipsum nunc aliquet bibendum enim, facilisis gravida.
              Consequat, mauris nunc congue nisi, vitae suscipit tellus mauris a
              diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus
              cras! Habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas sed tempus, urna et pharetra pharetra,
              massa massa. Amet nisl suscipit adipiscing bibendum? Id ornare
              arcu odio ut sem nulla pharetra diam sit amet nisl suscipit
              adipiscing bibendum est ultricies integer quis auctor elit sed
              vulputate mi sit amet mauris commodo quis imperdiet. Quam lacus
              suspendisse faucibus interdum posuere lorem! Ultrices neque ornare
              aenean euismod elementum nisi, quis! Non arcu risus, quis varius
              quam quisque id diam vel quam elementum pulvinar etiam non quam
              lacus suspendisse faucibus interdum posuere! Facilisi etiam
              dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in! tempus, urna et pharetra pharetra, massa massa. Amet
              nisl suscipit adipiscing bibendum? Id ornare arcu odio ut sem
              nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est
              ultricies integer quis auctor elit sed vulputate mi sit amet
              mauris commodo quis imperdiet. Quam lacus suspendisse faucibus
              interdum posuere lorem! Ultrices neque ornare aenean euismod
              elementum nisi, quis! Non arcu risus, quis varius quam quisque id
              diam vel quam elementum pulvinar etiam non quam lacus suspendisse
              faucibus interdum posuere! Facilisi etiam dignissim diam quis enim
              lobortis scelerisque fermentum dui faucibus in!
            </Text>
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
            color={colors.primary}
          />
          <FAB
            icon="check"
            style={{
              backgroundColor: colors.primary,
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
    padding: 4,
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
  fabs: {
    // marginBottom: 20,
  },
  fab: {
    margin: 8,
  },
})
