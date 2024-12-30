import { NewsDataType } from '@/types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions  } from 'react-native'

type Props = {
    SlideItem: NewsDataType,
    index: number
}

const {width} = Dimensions.get('screen')
const SliderItem = ({SlideItem , index}: Props) => {
    return (
        <View style={styles.itemWrapper} >
            <Text>SliderItem</Text>
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

})