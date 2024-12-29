import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'


type Props = {}

const Header = (props: Props) => {
    return (
        <View style={styles.container} >
            <View>
                <Ionicons name='search-outline' size={20} color={Colors.lightGrey} />
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
    }
})