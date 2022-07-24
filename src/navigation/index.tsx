import { BottomNavigation, Text } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Easing } from 'react-native'
import { useState, ComponentProps } from 'react'

type RoutesState = Array<{
  key: string
  title: string
  focusedIcon: string
  unfocusedIcon?: string
  color?: string
  badge?: boolean
  getAccessibilityLabel?: string
  getTestID?: string
}>

const MatchRoute = () => (
  <View>
    <Text variant="displayLarge">Display Large</Text>
  </View>
)
const MapRoute = () => (
  <View>
    <Text variant="displayLarge">Display Large</Text>
  </View>
)
const MessageRoute = () => <Text>Message</Text>
const SettingsRoute = () => <Text>Settings</Text>

export default function Navigation() {
  const insets = useSafeAreaInsets()
  const [index, setIndex] = useState(0)
  const [sceneAnimation, setSceneAnimation] =
    useState<ComponentProps<typeof BottomNavigation>['sceneAnimationType']>()

  const [routes] = useState<RoutesState>([
    {
      key: 'match',
      title: 'Match',
      focusedIcon: 'inbox',
    },
    {
      key: 'map',
      title: 'Map',
      focusedIcon: 'inbox',
    },
    {
      key: 'message',
      title: 'Message',
      focusedIcon: 'message',
    },
    {
      key: 'settings',
      title: 'Settings',
      focusedIcon: 'cogs',
    },
  ])

  return (
    <BottomNavigation
      safeAreaInsets={{ bottom: insets.bottom }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      labelMaxFontSizeMultiplier={2}
      renderScene={BottomNavigation.SceneMap({
        match: MatchRoute,
        map: MapRoute,
        message: MessageRoute,
        settings: SettingsRoute,
      })}
      sceneAnimationEnabled={sceneAnimation !== undefined}
      sceneAnimationType={sceneAnimation}
      sceneAnimationEasing={Easing.ease}
    />
  )
}
