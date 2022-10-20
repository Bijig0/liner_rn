import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import SearchIcon from "../assets/svgs/SearchIcon.svg";
import TechIcon from "../assets/svgs/TechIcon.svg";
import HomeIcon from "../assets/svgs/HomeIcon.svg";
import tw from "../lib/tailwind";

type Props = {
  navigation?: any;
};

const Footer = (props: Props) => {
  const footerIcons = [
    {
      position: 1,
      Icon: HomeIcon,
      onPress: () => {
        props.navigation.navigate("Home");
      },
    },
    {
      position: 2,
      Icon: SearchIcon,
      onPress: () => {
        props.navigation.navigate("Test");
      },
    },
    {
      position: 3,
      Icon: TechIcon,
    },
  ];
    return (
    //   ALL ELEMENTS ARE BOX-SIZING BORDER-BOX BY DEFAULT, AND CANT CHANGE THAT DEFAULT :(
    //   Adjust the height of this parent
    <View style={tw`h-20 absolute inset-x-0 bottom-0`}>
      {/* And padding of this bottom one, if you wanna adjust positioning */}
      <View
        style={tw`flex-row h-full pb-6 bg-black items-center justify-evenly border-t border-solid border-grey-regular`}
      >
        {footerIcons.map(({ position, onPress, Icon }) => (
          <Pressable key={position} hitSlop={35} onPress={onPress}>
            <Icon
              key={position}
              style={tw`w-svg-icon h-svg-icon`}
              fill="white"
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Footer;
