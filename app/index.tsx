import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/images/getting-started.jpg')} style={{flex: 1}} resizeMode="cover" />
      <View style={styles.wrapper}>
      <Text>Welcome Page</Text>
      <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper:{
    flex
  }
});
