import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import RawSearchIcon from "../../assets/svgs/SearchIcon.svg";
import RawTechIcon from "../../assets/svgs/TechIcon.svg";
import RawHomeIcon from "../../assets/svgs/HomeIcon.svg";
import tw from "../../lib/tailwind";
import { TabActions } from "@react-navigation/native";

type Props = {
  navigation?: any;
};

const Footer = (props: Props) => {
  const jumpToHome = TabActions.jumpTo("Home");
  const jumpToMyQueues = TabActions.jumpTo("MyQueues");
  const jumpToMyProfile = TabActions.jumpTo("Profile");

  const footerIcons = [
    {
      position: 1,
      Icon: RawHomeIcon,
      onPress: () => {
        props.navigation.dispatch(jumpToHome);
      },
    },
    {
      position: 2,
      Icon: RawSearchIcon,
      onPress: () => {
        props.navigation.dispatch(jumpToMyProfile);
      },
    },
    {
      position: 3,
      Icon: RawTechIcon,
      onPress: () => {
        props.navigation.dispatch(jumpToMyQueues);
      },
    },
  ];
  return (
    //   ALL ELEMENTS ARE BOX-SIZING BORDER-BOX BY DEFAULT, AND CANT CHANGE THAT DEFAULT :(
    //   Adjust the height of this parent
    <View style={tw`h-footer absolute inset-x-0 bottom-0`}>
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
