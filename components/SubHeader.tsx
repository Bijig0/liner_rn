import { View, Text } from "react-native";
import React from "react";
import tw from "../lib/tailwind";

type Props = {
    name: string;
    style?: any
};

const SubHeader = (props: Props) => {
  return (
    <View style={props.style}>
      <Text style={tw`font-primary-bold text-md text-white mb-search-bar`}>
        {props.name}
      </Text>
    </View>
  );
};

export default SubHeader;
