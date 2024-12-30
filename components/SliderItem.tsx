import { NewsDataType } from '@/types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image  } from 'react-native'

type Props = {
    SlideItem: NewsDataType,
    index: number
}

const SliderItem = ({SlideItem , index}: Props) => {
    return (
        <View style={styles.container} >
            <Text>SliderItem</Text>
        </View>
    )
}

export default SliderItem;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})