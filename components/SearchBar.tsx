import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value:string;
  onChangeText:(text:string)=>void;

}

const SearchBar = ({ placeholder, onPress,value,onChangeText }: Props) => {
  return (
    <View>
      <Text className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <FontAwesome name="search" size={20} color="#ab8bff" />
        <TextInput
          onPress={onPress}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#a8b5db"
          className="flex-1 ml-2 text-white"
        />
      </Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
