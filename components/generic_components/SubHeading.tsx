import { View, Text } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

type Props = {
  text: string;
  style?: any;
  margin: "y" | "t" | "b";
};

const SubHeading = (props: Props) => {
  return (
    <View style={props.style}>
      <Text
        style={tw`font-primary-bold text-md text-white m${props.margin}-search-bar`}
      >
        {props.text}
      </Text>
    </View>
  );
};

export default SubHeading;
