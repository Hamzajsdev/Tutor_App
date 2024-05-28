import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { categoryscreenData } from "../assets/data/data";
import { images } from "../assets";
import Button from "../components/button";

const { welcome } = images;

export default function CategoryScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-bgWhite">
      <View className="flex-1 flex justify-evenly my-4">
        {/** ====================== Image =================================== */}
        <View className="flex-row justify-center">
          <Image source={welcome} style={{ width: 324, height: 324 }} />
        </View>

        {/** ====================== Welcome Text ============================= */}
        <View className="flex flex-col gap-2 ">
          <Text className="text-darkGrayText text-xl text-center font-exoSemibold">
            {categoryscreenData.title}
          </Text>
          <Text className="text-darkGrayText text-lg text-center font-exo">
            {categoryscreenData.subtitle}
          </Text>
        </View>

        {/** ====================== Action button ============================= */}
        <Button
          primaryBtnText={"Sign Up as a Tutor"}
          onPrimaryBtnPress={() => navigation.navigate("TutorSignUp")}
        />
        <Button
          primaryBtnText={"Sign Up as a Student"}
          onPrimaryBtnPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </SafeAreaView>
  );
}
