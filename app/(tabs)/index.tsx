import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { SearchBar } from 'react-native-screens'

type Props = {}

const Page = (props: Props) => {
  const {} = useSafeAreaInsets
  return (
    <View style={[styles.container, {paddingTop: safeTop}]}>
     <Header />
     <SearchBar />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})