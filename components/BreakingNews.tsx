import { Colors } from '@/constants/Colors'
import { NewsDataType } from '@/types'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import SliderItem from '@/components/SliderItem'
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

type Props = {
    newsList: Array<NewsDataType>
}


const BreakingNews = ({newsList}: Props) => {
    const [data, setData] = useState(newsList);
    const [paginationIndex, setPaginationIndex] = useState(0);
    const scrollX = useSharedValue(0);
    const ref = useAnimatedRef<Animated.FlatList<any>>();
    
    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Breaking New</Text>
            <View style={styles.slideWrapper}>
                <Animated.FlatList 
                ref={ref}
                 data={data} 
                 keyExtractor={(_, index) => `list_item${index}`} 
                 renderItem={({ item , index })=>{
                    <SliderItem slideItem={item} index={index} />
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                on
                />
            </View>
        </View>
    )
}

export default BreakingNews;

const styles = StyleSheet.create({
    container:{
        marginBottom: 10,
    },
    title:{
        fontSize: 10,
        fontWeight: "600",
        color: Colors.black,
        marginBottom: 10,
        marginLeft: 20,
    },
    slideWrapper:{
        // width: '100%',
        // flex: 1,
        justifyContent: 'center',
    },
})