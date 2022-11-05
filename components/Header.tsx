import { View, Text, Pressable } from "react-native";
import React from "react";
import RawBackIcon from "../assets/svgs/BackIcon.svg";
import tw from "../lib/tailwind";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  navigation: any;
};

const Header = (props: Props) => {
  const onPress = () => {
    props.navigation.goBack();
  };
  return (
    <View style={tw`absolute left-0 w-full`}>
      <Pressable hitSlop={200} onPress={onPress}>
        <RawBackIcon
          fill={"currentColor"}
          style={tw`w-back-icon h-back-icon absolute left-[25px] top-[75px] text-white`}
        />
      </Pressable>
    </View>
  );
};

export default Header;
