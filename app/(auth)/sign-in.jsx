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
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    console.log(form.email, form.password);

    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields.");
    }
    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
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
            Login to Aora
          </Text>

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

          <TouchableOpacity>
            <Text className="text-gray-300 text-base font-plight mt-4 text-right">
              Forgot password
            </Text>
          </TouchableOpacity>

          <CustomButton
            title="Login"
            handlePress={() => {
              submit();
            }}
            containerStyles="w-full mt-4"
            isLoading={isSubmitting}
          />
          <View className="flex flex-row items-center justify-center">
            <Text className="text-white text-base font-plight mt-5">
              Don’t have an account?{" "}
            </Text>

            <Link
              className="text-secondary-100 text-base font-plight mt-5"
              href="/sign-up"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
