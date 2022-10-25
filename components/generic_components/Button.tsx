import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

type Props = {
  style?: string;
  text: string;
  bgColor: string;
  onPress: () => any;
  textColor: string;
};

const Button = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}
      style={tw`${props.bgColor ?? 'bg-success'} w-main-btn h-main-btn rounded-xl items-center justify-center ${props.style ?? ''}`}
    >
      <Text style={tw`${props.textColor} text-sm`}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
