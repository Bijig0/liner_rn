import { View, Text, Image } from "react-native";
import React from "react";
import RawRestaurantImg from "../../../assets/restaurant.jpg";
import tw from "../../../lib/tailwind";
import Pill from "../../generic_components/Pill";
import ClockIcon from "../../../assets/svgs/ClockIcon.svg";

type Props = {};

const RestaurantImg = (props: Props) => {
  return (
    <View style={tw`flex-2 relative`}>
      <Image source={RawRestaurantImg} style={tw`flex-1 w-full`} />
      <Pill Icon={ClockIcon} text="20-30 Mins" />
    </View>
  );
};

export default RestaurantImg;
