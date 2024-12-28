import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <View style={styles.container} >
     <Image source={{uri: 'https://xsgames.co/randomusers/avatar.php?g=male'}} style={styles.userImg}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    
})