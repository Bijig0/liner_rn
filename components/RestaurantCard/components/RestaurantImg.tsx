import { View, Text, Image } from "react-native";
import React from "react";
import RawRestaurantImg from "../../../assets/restaurant.jpg";
import tw from "../../../lib/tailwind";
import Pill from "../../generic_components/Pill";
import ClockIcon from "../../../assets/svgs/ClockIcon.svg";

type Props = {
  imgSrc: URL;
};

// DEBUG THIS SOMETIME LATER, FOR SOME REASON THERE IS A BUG THAT MAKES IT UNDEFINED

const RestaurantImg = (props: Props) => {

  if (typeof props.imgSrc == 'undefined') {
    return <View style={tw`flex-1 h-[50px] bg-white`}></View>
  }
 
  return (
    <View style={tw`flex-2 relative`}>
      <Image source={{ uri: props.imgSrc.href }} style={tw`flex-1 w-full`} />
      <Pill Icon={ClockIcon} text="20-30 Mins" />
    </View>
  );
};

export default RestaurantImg;
