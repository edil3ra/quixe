import { StyleSheet, View, ViewStyle, ScrollViewProps } from 'react-native'
import { useTheme } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScrollView, StyleProp } from 'react-native'

type Props = ScrollViewProps & {
  children: React.ReactNode
  withScrollView?: boolean
  withNavBar?: boolean
  style?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
}

export default function MainLayoutContainer({
  children,
  withScrollView = true,
  withNavBar = true,
  style,
  contentContainerStyle,
  ...rest
}: Props) {
  const theme = useTheme()
  const insets = useSafeAreaInsets()

  const containerStyle = [
    styles.container,
    {
      backgroundColor: theme.colors.background,
      paddingBottom: insets.bottom,
      paddingTop: withNavBar ? 0 : insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  ]

  return (
    <>
      {withScrollView ? (
        <ScrollView
          {...rest}
          contentContainerStyle={contentContainerStyle}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          style={[containerStyle, style]}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[containerStyle, style]}>{children}</View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
