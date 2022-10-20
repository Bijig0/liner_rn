import { View, Text, Image } from "react-native";
import React from "react";
import tw from "../lib/tailwind";
import MainButton from "./MainButton";
import ImageWrapper from "./ImageWrapper";

type Props = {
  restaurantName: string;
};

const RestaurantCard = (props: Props) => {
  return (
    <View style={tw`h-card w-card bg-white rounded-xl overflow-hidden mr-5`}>
      <ImageWrapper />
      {/* Get rid of this additional div */}
      <View style={tw`flex-1`}>
        <View style={tw`flex-1 p-card justify-between flex-row`}>
          <View style={tw`justify-evenly`}>
            <Text style={tw`font-primary-bold text-sm`}>
              {props.restaurantName}
            </Text>
            <Text style={tw`text-1xs`}>Brighton, Vic</Text>
          </View>
          <MainButton />
        </View>
      </View>
    </View>
  );
};

export default RestaurantCard;
