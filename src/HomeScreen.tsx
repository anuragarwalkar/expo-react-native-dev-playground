import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from '../constants/images'

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image source={images.logo} className="w-[130px] h-[34px]" resizeMode="contain" />
          <Image source={images.cards} className="max-w-[380px] h-[300px]"  resizeMode="contain" />
        </View>
      </ScrollView> 
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
