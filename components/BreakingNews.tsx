import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

const BreakingNews = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Breaking New</Text>
            <View style={styles.slideWrapper}></View>
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