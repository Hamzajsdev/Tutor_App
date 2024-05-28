import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FilterItem from "./filterItem";
import { teacherData } from "../../assets/data/data";

const AreaFilter = ({ filters, onSubjectSelect }) => {
  const [selected, setSelected] = useState(filters[0]);
  const handleSubjectSelect = (city) => {
    setSelected(city);
    onSubjectSelect(city);
  };
  return (
    <View className="mb-5">
      <View className="flex flex-row justify-between">
        <Text className="font-exoSemibold text-darkGrayText text-xs capitalize ">
          Area
        </Text>
        <TouchableOpacity onPress={() => onSubjectSelect(null)}>
          <Text className="font-exoSemibold text-darkGrayText text-xs capitalize ">
            clear
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        className="mb-5"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row mt-3">
          {filters.map((item) => (
            <FilterItem
              key={item}
              item={item}
              selected={selected}
              setSelected={(e) => handleSubjectSelect(e)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AreaFilter;
