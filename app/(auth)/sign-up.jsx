import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const signUp = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    console.log(form.email, form.password, form.username);

    if (!form.email || !form.password || !form.username) {
      Alert.alert("Error", "Please fill in all fields.");
    }
    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="w-full min-h-[90vh] justify-center px-4">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />

          <Text className="text-white text-2xl font-psemibold mt-7">
            Signup to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => {
              setForm({ ...form, username: e });
            }}
            otherStyles="mt-7"
            placeholder="Your Username"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => {
              setForm({ ...form, email: e });
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Your Email"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(pass) => {
              setForm({ ...form, password: pass });
            }}
            otherStyles="mt-7"
            placeholder="Your Password"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
          />
          <View className="flex flex-row items-center justify-center">
            <Text className="text-white text-base font-plight mt-5">
              Already have an account?{" "}
            </Text>

            <Link
              className="text-secondary-100 text-base font-plight mt-5"
              href="/sign-in"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signUp;

const styles = StyleSheet.create({});
