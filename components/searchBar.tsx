import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'


type Props = {}

const searchBar = (props: Props) => {
    return (
        <View style={styles.container} >
            <View style={styles.searchBar}>
                <Ionicons name='search-outline' size={20} color={Colors.lightGrey} />
            </View>
        </View>
    )
}

export default searchBar;

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
    },
    searchBar:{
       backgroundColor: '#E4E4E4',
    }
})