import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import tw from "../lib/tailwind";

type Props = {};

const MainButton = (props: Props) => {
  return (
    <TouchableOpacity style={tw`bg-success w-main-btn h-main-btn rounded-xl items-center justify-center`}>
      <Text style={tw`text-white text-sm`}>Queue</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
