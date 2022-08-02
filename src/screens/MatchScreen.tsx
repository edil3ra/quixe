import { Text, Appbar, FAB, Portal, useTheme } from 'react-native-paper'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function SettingScreen({ navigation, options }) {
  const placeholder = `https://unsplash.it/300/300/?random&__id=1`
  console.log(placeholder)
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <ScrollView>
          <Image source={{ uri: placeholder }} style={styles.photo} />
          <Text>
            Ante in nibh mauris, cursus mattis molestie a, iaculis at erat
            pellentesque adipiscing commodo elit, at imperdiet dui accumsan sit?
            Suspendisse interdum consectetur libero, id faucibus nisl tincidunt
            eget nullam non nisi est, sit amet facilisis magna etiam tempor,
            orci eu? In hac habitasse platea dictumst quisque sagittis, purus
            sit amet volutpat consequat! Vitae ultricies leo integer malesuada
            nunc vel risus commodo? Eget lorem dolor, sed viverra ipsum nunc
            aliquet bibendum enim, facilisis gravida. Consequat, mauris nunc
            congue nisi, vitae suscipit tellus mauris a diam maecenas sed enim
            ut sem viverra aliquet eget sit amet tellus cras! Habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas sed
            tempus, urna et pharetra pharetra, massa massa. Amet nisl suscipit
            adipiscing bibendum? Id ornare arcu odio ut sem nulla pharetra diam
            sit amet nisl suscipit adipiscing bibendum est ultricies integer
            quis auctor elit sed vulputate mi sit amet mauris commodo quis
            imperdiet. Quam lacus suspendisse faucibus interdum posuere lorem!
            Ultrices neque ornare aenean euismod elementum nisi, quis! Non arcu
            risus, quis varius quam quisque id diam vel quam elementum pulvinar
            etiam non quam lacus suspendisse faucibus interdum posuere! Facilisi
            etiam dignissim diam quis enim lobortis scelerisque fermentum dui
            faucibus in!
          </Text>
        </ScrollView>
        <>
          <View style={styles.row}>
            <View style={styles.fabVariant} key={1}>
              <FAB
                icon="close"
                style={{ ...styles.fab, ...styles.red }}
                onPress={() => {}}
                size="medium"
                color="white"
              />
            </View>
            <View style={styles.fabVariant} key={2}>
              <FAB
                icon="check"
                style={{ ...styles.fab, ...styles.green }}
                onPress={() => {}}
                size="medium"
                color="white"
              />
            </View>
          </View>
        </>
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
  row: {
    marginRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fab: {
    margin: 8,
  },
  green: {
    backgroundColor: 'green',
    color: 'white',
  },
  red: {
    backgroundColor: 'red',
  },
})
