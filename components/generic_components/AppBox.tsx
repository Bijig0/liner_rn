import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

type Props = { children: React.ReactNode; style?: Object };

const AppBox = (props: Props) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <View style={tw`flex-1 px-app-box pt-4`}>{props.children}</View>
    </SafeAreaView>
  );
};

export default AppBox;
