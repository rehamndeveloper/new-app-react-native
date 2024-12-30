import { NewsDataType } from '@/types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image  } from 'react-native'

type Props = {
    SlideItem: NewsDataType,
    index: number
}

const Header = ({SlideItem}: Props) => {
    return (
        <View style={styles.container} >
            
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})