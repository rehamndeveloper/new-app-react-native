import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { TextInput } from 'react-native-gesture-handler'


type Props = {}

const searchBar = (props: Props) => {
    return (
        <View style={styles.container} >
            <View style={styles.searchBar}>
                <Ionicons name='search-outline' size={20} color={Colors.lightGrey} />
                <TextInput
                 placeholder='search' 
                 placeholderTextColor={Colors.lightGrey} />
                 
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
       paddingHorizontal: 10,
       paddingVertical: 12,
       borderRadius: 10,
       flexDirection: 'row',
       gap: 10,
    }
})