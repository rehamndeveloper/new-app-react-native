import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/images/getting-started.jpg')} style={{ flex: 1 }} resizeMode="cover" />
      <View style={styles.wrapper}>
        <Text style={styles.title}>stay Updated!</Text>
        <Text style={styles.description}>Get breaking news and presonalized updates drectly to your feed.</Text>
        <TouchableOpacity style={styles.btn} onPress={() => router.replace("/(tabs)")}>
          <Text style={styles.btnText}>Go to Home Screen</Text>
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
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 30,
    gap: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.5,
    lineHeight: 36,
    textAlign: 'center',
  },
  description: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1.2,
    lineHeight: 22,
    textAlign: 'center',
  },
  btn:{
    backgroundColor: Colors.tint,
    paddingVertical: 15,
    marginVertical: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText:{
    
  }
});
