import { View, Text } from "react-native";
import React from "react";

const VideoCard = ({ video: { title, thumbnail, video } }) => {
  return (
    <View className="flex-col items-center px-4 mb-14">
      <Text className="text-2xl text-whtie">{title}</Text>
    </View>
  );
};

export default VideoCard;
