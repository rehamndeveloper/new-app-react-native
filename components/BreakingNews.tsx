import { Colors } from '@/constants/Colors'
import { NewsDataType } from '@/types'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

type Props = {
    newsList: Array<NewsDataType>
}

const BreakingNews = ({newsList}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Breaking New</Text>
            <View style={styles.slideWrapper}>
                <FlatList data={newsList}  keyExtractor={(_, index) => `list_item${index}`} renderItem={(_,index)=>{
                    <SliderItem />
                }}/>
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
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
})