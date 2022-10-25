import { View, Text } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import ClockIcon from "../assets//svgs/ClockIcon.svg";
import resolveConfig from "tailwindcss/resolveConfig";
import { SvgProps } from "react-native-svg";
const tailwindConfig = require("../../tailwind.config.js");

type Props = {
  Icon: React.FC<SvgProps>,
  iconColor?: string,
  text: string
};

const Pill = (props: Props) => {
  const fullConfig = resolveConfig(tailwindConfig) as any;
  const grey: string = fullConfig.theme.colors.grey.darkregular ?? "grey";
  return (
    <View
      style={tw`flex-row absolute bottom-pill right-pill bg-black w-pill h-pill py-1 rounded-xl justify-evenly items-center`}
    >
      {/* Make this use the tailwind grey in the future idk how rn */}
      <props.Icon style={tw`w-svg-icon h-svg-icon`} fill={props.iconColor ?? grey} />

      <Text style={tw`text-white text-2xs font-primary-bold`}>{props.text}</Text>
    </View>
  );
};

export default Pill;
