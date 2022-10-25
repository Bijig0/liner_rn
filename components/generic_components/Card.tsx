import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import RestaurantImg from "../RestaurantCard/components/RestaurantImg";
import MainButton from "./Button";

type Props = {
  onPress?: () => void;
  label: string;
  subLabel: any;
  textBoxLayout: string;
  Button?: any;
  cardProportions: string;
  buttonProps?: object;
};

const RestaurantCard = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress ? props.onPress : () => false}
      style={tw`${props.cardProportions} bg-white rounded-xl overflow-hidden mr-5`}
    >
      <RestaurantImg />
      {/* Get rid of this additional div */}
      <View style={tw`flex-1`}>
        <View style={tw`${props.textBoxLayout}`}>
          <View style={tw`justify-evenly`}>
            <Text style={tw`font-primary-bold text-sm`}>{props.label}</Text>
            <Text style={tw`text-1xs`}>{props.subLabel}</Text>
          </View>
          {props.Button ? (
            <props.Button buttonProps={props.buttonProps} />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
