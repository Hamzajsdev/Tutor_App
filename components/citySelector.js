import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { images } from "../assets";
import { getPakistanCities } from "../assets/data/data";

const CitySelector = ({ city }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  const selectSubject = (subject) => {
    console.log("selected grade --> ", subject);
    setSelectedCity(subject);
  };
  return (
    <View className="flex justify-center bg-bgLightGray min-h-14 py-4 rounded-lg mb-[18px]">
      <Pressable onPress={toggleDropdown} className="flex px-4">
        <View className="flex  items-center justify-between flex-row">
          <Text className="font-exo font-semibold text-lg">{city}</Text>
          {!showDropDown ? (
            <ChevronDownIcon style={{ color: themeColors.darkGrayText }} />
          ) : (
            <ChevronUpIcon style={{ color: themeColors.darkGrayText }} />
          )}
        </View>

        {/** ======================== Dropdown with all available subjects ============================== */}
        {showDropDown ? (
          <FlatList
            data={getPakistanCities(city)}
            numColumns={2}
            className="w-full mt-2"
            renderItem={({ item }) => (
              <Pressable
                className={`flex space-x-3 flex-row w-[45%] items-center justify-center m-2 rounded-[10px] py-3 ${
                  selectedCity === item.label
                    ? "bg-bgPurple"
                    : "bg-bgLightGray2"
                }`}
                onPress={() => selectSubject(item?.label)}
              >
                <Text
                  className={`text-center font-exo font-semibold text-base ${
                    selectedCity === item.label
                      ? "text-bgWhite"
                      : "text-darkGrayText"
                  }`}
                >
                  {item?.label}
                </Text>
              </Pressable>
            )}
            keyExtractor={(item) => item?.label}
          />
        ) : null}
      </Pressable>
    </View>
  );
};

export default CitySelector;
