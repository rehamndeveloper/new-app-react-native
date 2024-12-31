import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image  } from 'react-native'
import { NewsDataType } from '@/types'
import { SharedValue } from 'react-native-reanimated'

type Props = {
    items: NewsDataType[],
    paginationIndex: number,
    scrollX: SharedValue<number>
}

const Pagination = ({items, paginationIndex, scrollX}: Props) => {
    return (
        <View style={styles.container} >
            
        </View>
    )
}

export default Pagination;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})