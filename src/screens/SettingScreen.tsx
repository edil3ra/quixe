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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MainLayoutContainer from '~/components/MainLayoutContainer'

export default function SettingsScreen({ navigation, route }) {
  const theme = useTheme()

  return (
    <MainLayoutContainer withNavBar={false}>
      <View
        style={{
          backgroundColor: theme.colors.primary,
        }}
      >
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor={theme.colors.tertiary}
        >
          <View
            style={{
              ...styles.userContainer,
            }}
          >
            <View style={styles.profileHeader}>
              <View>
                <Avatar.Image
                  style={styles.profileAvatar}
                  source={require('~/assets/images/avatar.png')}
                />
              </View>
              <View style={styles.profileHeaderInner}>
                <IconButton
                  iconColor={theme.colors.primary}
                  containerColor="white"
                  icon="pencil"
                  size={14}
                />
              </View>
            </View>
            <View style={styles.profileContent}>
              <Text style={styles.profileText} variant="labelLarge">
                Vincent, 32
              </Text>
              <Text style={styles.profileText} variant="labelMedium">
                ce que je recherche comme taf
              </Text>
            </View>
          </View>
        </TouchableRipple>
      </View>
    </MainLayoutContainer>
  )
}

const styles = StyleSheet.create({
  ripple: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileHeaderInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
    left: 50,
  },
  profileAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 100,
    borderWidth: 34,
    borderStyle: 'solid',
  },
  profileHeader: {
    marginBottom: 10,
  },
  profileContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: 'white',
  },
})
