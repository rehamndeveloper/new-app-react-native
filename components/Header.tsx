import { StyleSheet, Text, TouchableOpacity, View, Image  } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

type Props = {}

const Header = (props: Props) => {
    return (
        <View style={styles.container} >
            <View style={styles.userInfo}>
                <Image
                    source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }}
                    style={styles.userImg}
                />
                <View>
                    <Text>Welcome</Text>
                    <Text>muhammad sarfaraz Tahir</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => { }}>
                <Ionicons name='notifications-outline' size={24} color={Colors.black} />
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    userInfo:{
        flexDirection: 'row',
        alignContent: 'center',
        gap: 10
    },

})