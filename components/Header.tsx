import { Text, View } from "react-native";
import React from "react";
import tw from "../lib/tailwind";

type Props = {
  style: any
};

const Header = (props: Props) => {
  return (
    <View {...props}>
      <Text style={tw`font-primary-bold text-lg text-white`}>Explore</Text>
    </View>
  );
};

export default Header;
