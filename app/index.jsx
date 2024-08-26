import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-600">
      <Text>mohamed</Text>
      <Text>mohamed</Text>
      <Text>mohamed</Text>
      <StatusBar style="auto" />
      <Link href="./profile" style={{ backgroundColor: "red" }}>
        go to Profile
      </Link>
    </View>
  );
}
