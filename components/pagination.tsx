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
            <Text>pagination</Text>
        </View>
    )
}

export default Pagination;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    dot:{
      backgroundColor: "#333",
      height: 8,
      width: 8,
      marginHorizontal: 2,
      borderRadius: 8,
    },
})