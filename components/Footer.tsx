import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SearchIcon from "../assets/svgs/SearchIcon.svg";
import TechIcon from "../assets/svgs/TechIcon.svg";
import HomeIcon from "../assets/svgs/HomeIcon.svg";
import tw from "../lib/tailwind";

type Props = {};

const Footer = (props: Props) => {
  const footerIcons = [
    {
      position: 1,
      Icon: HomeIcon,
    },
    {
      position: 2,
      Icon: SearchIcon,
    },
    {
      position: 3,
      Icon: TechIcon,
    },
  ];
  return (
    <View
      style={tw`flex-row absolute inset-x-0 bottom-4 bg-black h-14 items-center justify-evenly border-t border-solid border-grey-regular`}
    >
      {footerIcons.map(({ position, Icon }) => (
        <TouchableOpacity>
          <Icon key={position} style={tw`w-svg-icon h-svg-icon`} fill="white" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Footer;
