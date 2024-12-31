import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image  } from 'react-native'
import { NewsDataType } from '@/types'
import { SharedValue } from 'react-native-reanimated'

type Props = {
    SlideItem: NewsDataType[],
    paginationIndex: number,
    scrollX: SharedValue<number>
}

const Pagination = (props: Props) => {
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