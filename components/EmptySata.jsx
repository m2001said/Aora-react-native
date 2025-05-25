import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptySata = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={images.empty} resizeMode="contain" className="w-64 h-52" />
      <Text className="text-white text-2xl font-psemibold">{title}</Text>
      <Text className="text-gray-100 text-sm font-pmedium">{subtitle}</Text>

      <CustomButton
        title="Cteate video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptySata;
