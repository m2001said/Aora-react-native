import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center px-4 gap-y-8">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px] w-full"
            resizeMode="contain"
          />

          <View className="relative">
            <Text className="text-white text-3xl font-psemibold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[70px] h-[13px] absolute right-0 -bottom-1"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100 text-center text-base">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
