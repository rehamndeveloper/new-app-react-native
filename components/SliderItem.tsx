import { NewsDataType } from '@/types'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import { SharedValue } from 'react-native-reanimated'

type Props = {
    SlideItem: NewsDataType,
    index: number,
    scrollX: SharedValue<number>
}

const { width } = Dimensions.get('screen')
const SliderItem = ({ SlideItem, index, scrollX }: Props) => {
    return (
        <View style={styles.itemWrapper} >
            <Image
                source={{ uri: SlideItem.image_url }}
                style={styles.image}
            />
            <LinearGradient>
                <Text>{SlideItem.title}</Text>
            </LinearGradient>
        </View>
    )
}

export default SliderItem;

const styles = StyleSheet.create({
    itemWrapper: {
        // position: 'relative',
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