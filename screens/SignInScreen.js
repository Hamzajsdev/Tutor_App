import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { images } from "../assets";
import Button from "../components/button";
import Input from "../components/input";
import { EyeIcon } from "react-native-heroicons/solid";

const { signin } = images;

export default function SignInScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-around",
          paddingBottom: 20,
        }}
      >
        <View>
          {/** ====================== Image ============================= */}
          <View className="flex-row justify-center ">
            <Image source={signin} style={{ width: 266, height: 266 }} />
          </View>

          {/** ====================== Sign In inputs ============================= */}
          <View className="flex flex-col w-full items-center justify-center mt-3">
            <Input label={"Email address"} placeholder={"name@example.com"} />
            <Input
              label={"Password"}
              placeholder={"********"}
              Icon={EyeIcon}
              last
            />
          </View>
          <View className="mt-8" />
          {/** ====================== Action button ============================= */}
          <Button
            primaryBtnText={"Sign In"}
            onPrimaryBtnPress={() => navigation.navigate("Home")}
            showSecondaryBtn={true}
            secondaryBtnText1={"Don't have an account?"}
            secondaryBtnText2={"Sign Up"}
            onSecondaryBtnPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
