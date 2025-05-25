import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  value,

  handleChangeText,
  otherStyles,
}) => {
  return (
    <View className={`flex-1 border-2 rounded-lg border-black-200 focus:border-secondary relative bg-black-200 flex-row items-center gap-2 p-2 ${otherStyles}`}>
      <TextInput
        className="flex-1 text-lg text-white"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
      />

      <TouchableOpacity>
        <Image
          source={icons.search}
          className="w-8 h-6"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
