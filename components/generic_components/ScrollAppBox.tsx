import { Text, View, ScrollView } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

type Props = { children: React.ReactNode; style?: Object };

const ScrollAppBox = (props: Props) => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <ScrollView style={tw`flex-1 px-app-box pt-4`}>
        {props.children}
      </ScrollView>
    </View>
  );
};

export default ScrollAppBox;
