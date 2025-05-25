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

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${otherStyles}`}>
      <Text className="text-white text-lg font-plight">{title}</Text>
      <TextInput
        className="border-2 border-black-200 focus:border-secondary relative bg-black-200 text-xl p-4 rounded-lg placeholder-gray-500 text-white mt-2"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />

      {title === "Password" && (
        <TouchableOpacity
          className="absolute right-3 bottom-3"
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            className="w-8 h-8"
            source={!showPassword ? icons.eyeHide : icons.eye}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});
