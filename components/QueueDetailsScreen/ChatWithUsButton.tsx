import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";


type Props = {};

const ChatWithUsButton = (props: Props) => {
  return (
      <TouchableOpacity style={tw`rounded-xl h-main-btn w-full bg-success items-center justify-center`}>
          <Text style={tw`rounded-xl font-primary-bold text-sm text-white`}>Chat With Us</Text>
    </TouchableOpacity>
  );
};

export default ChatWithUsButton;
