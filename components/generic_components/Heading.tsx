import { Text, View } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

type Props = {
  style?: any;
  text: string;
};

const Heading = (props: Props) => {
  return (
    <View style={tw`${props.style}`}>
      <Text style={tw`font-primary-bold text-lg text-white`}>{props.text}</Text>
    </View>
  );
};

export default Heading;
