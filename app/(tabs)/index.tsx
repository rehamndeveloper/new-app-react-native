import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  const
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})