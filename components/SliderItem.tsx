import { NewsDataType } from '@/types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'

type Props = {
    SlideItem: NewsDataType,
    index: number
}

const { width } = Dimensions.get('screen')
const SliderItem = ({ SlideItem, index }: Props) => {
    return (
        <View style={styles.itemWrapper} >
            <Image
                source={{ uri: SlideItem.image_url }}
                style={styles.image}
            />
            <Text></Text>
        </View>
    )
}

export default SliderItem;

const styles = StyleSheet.create({
    itemWrapper: {
        position: 'relative',
        width: width,
        justifyContent: 'center',
        alignContent: 'center',
    },
    image: {
        width: width,
        height: 180,
        borderRadius: 20,
    },
})