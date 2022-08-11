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
      <View
        style={{
          backgroundColor: theme.colors.primary,
        }}
      >
        <TouchableRipple
          style={styles.ripple}
          onPress={() => navigation.push('ProfileScreen')}
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
                  size={80}
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
      <View>
        <List.Section style={{ marginTop: 0 }}>
          <TouchableRipple
            onPress={() => navigation.push('PreferenceScreen')}
            rippleColor={theme.colors.tertiary}
          >
            <List.Item
              left={(props) => (
                <List.Icon {...props} color="#0096FF" icon="account-cog" />
              )}
              descriptionStyle={{ fontSize: 12 }}
              title="My Preferences"
              description="Choose where and when you want to work"
            />
          </TouchableRipple>
          <Divider bold />
          <TouchableRipple
            onPress={() => navigation.push('InvitationScreen')}
            rippleColor={theme.colors.tertiary}
          >
            <List.Item
              left={(props) => (
                <List.Icon {...props} color="#EE4B2B" icon="account-plus" />
              )}
              descriptionStyle={{ fontSize: 12 }}
              title="Invite Friends"
              description="Invite your friends"
            />
          </TouchableRipple>
          <Divider bold />
          <TouchableRipple
            onPress={() => navigation.push('SettingsScreen')}
            rippleColor={theme.colors.tertiary}
          >
            <List.Item
              left={(props) => <List.Icon {...props} color="grey" icon="cog" />}
              descriptionStyle={{ fontSize: 12 }}
              title="App Account"
              description="Manage your notifications, connected accounts..."
            />
          </TouchableRipple>
          <Divider bold />
          <TouchableRipple
            onPress={() => {}}
            rippleColor={theme.colors.tertiary}
          >
            <List.Item
              left={(props) => (
                <List.Icon {...props} color="#4CBB17" icon="help-circle" />
              )}
              descriptionStyle={{ fontSize: 12 }}
              title="Need Help?"
              description="Faq, tutorial and contact"
            />
          </TouchableRipple>
          <Divider bold />
        </List.Section>
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
    paddingVertical: 50,
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
    borderWidth: 42,
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
