import { View, Text } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

type Props = {};

const UpdatesArea = (props: Props) => {
  return (
    <View
      style={tw`w-full h-80 bg-grey-dark border border-grey-regular border-solid`}
    >
      <Text style={tw`text-white`}>Some filler text</Text>
    </View>
  );
};

export default UpdatesArea;
