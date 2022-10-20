import { View, Text, Image } from "react-native";
import React from "react";
import Pill from "./Pill";
import RestaurantImg from "../assets/restaurant.jpg";
import tw from "../lib/tailwind";

type Props = {};

const ImageWrapper = (props: Props) => {
  return (
    <View style={tw`flex-2 relative`}>
      <Image source={RestaurantImg} style={tw`flex-1 w-full`} />
      <Pill />
    </View>
  );
};

export default ImageWrapper;
